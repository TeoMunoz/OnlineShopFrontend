var categoriesCallback = null;
var categoriesTable = document.getElementById("categories-table");

/**
 * The array of for categoris
 */
var categories = [];

/**
 * Loads the categories through the API.
 */
function loadCategories(callback = null) {
	categoriesCallback = callback;

	sendRequest("GET", "API/V1/Categories", onCategoriesLoaded, onCategoriesLoadingError);
}

/**
 * Called when the categories have been loaded successfully.
 */
function onCategoriesLoaded(request) {
	categories = JSON.parse(request.responseText);

	if (categoriesCallback) {
		categoriesCallback();
	}
}

/**
 * Loads the categories for the category list.
 */
 function loadCategoryList() {
	loadCategories(onCategoriesLoadedForList);
}

/**
 * When error
 */
function onCategoriesLoadingError(request) {
	if (request && request.status != 401) {
		alert("Error:\r\n\r\n" + request.responseText);
	}
}

function onCategoriesLoadedForList() {
	//Remove the old entries.
	categoriesTable.innerHTML = "";

	//Add the new category.
	for (var i = 0; i < categories.length; i++) {
		var categoryRow = document.createElement("tr");
		categoriesTable.appendChild(categoryRow);

		var nameCell = document.createElement("td");
		nameCell.innerText = categories[i].name;
		categoryRow.appendChild(nameCell);

		var activeCell = document.createElement("td");
		activeCell.innerText = categories[i].active;
		categoryRow.appendChild(activeCell);

		var actionsCell = document.createElement("td");
		categoryRow.appendChild(actionsCell);

		var deleteButton = document.createElement("button");
		deleteButton.innerText = "Delete";
		deleteButton.onclick = onDeleteButtonPressed;
		deleteButton.className = "destructive";
		deleteButton.setAttribute("category-id", categories[i].category_id);
		actionsCell.appendChild(deleteButton);
	}
}

/**
 * If delete button are presed
 */
function onDeleteButtonPressed(event) {
	var id = event.currentTarget.getAttribute("category-id");
	if (!confirm("Delet ID ?" + id + "?")) {
		return;
	}

	sendRequest("DELETE", "API/V1/Category/" + id, onCategoryDeleted, onCategoryDeletionError);
}

function onCategoryDeleted(request) {
	loadCategoryList();
}