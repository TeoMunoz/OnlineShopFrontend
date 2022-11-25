/**
 * Category ID
 */
 var id = null;

 var categoryNameField = document.getElementById("name-field");
 var activeCheckbox = document.getElementById("active-checkbox");
 
 /**
  * Save data in the API
  */
 function onEditCategory(event) {
     event.preventDefault();
 
     var category = {
         name: categoryNameField.value,
         active: activeCheckbox.checked
     };
 
     //Send a PUT ot POST request
     if (id) {
         sendRequest("PUT", "API/V1/Category/" + id, onCategorySaved, onCategorySavingError, category);
     }
     else {
         sendRequest("POST", "API/V1/Category", onCategorySaved, onCategorySavingError, category);
     }
 }
 
 /**
  * If a error ocurret.
  */
 function onCategorySavingError(request) {
     if (request) {
         alert("Error:\r\n\r\n" + request.responseText);
     }
 }

 function onCategoryLoadingError(request) {
    if (request) {
        alert("Error:\r\n\n\n" + request.responseText);
    }
}
 
 function onCategoryLoaded(request) {
     var category = JSON.parse(request.responseText);
 
     categoryNameField.value = category.name;
     activeCheckbox.checked = category.active == 1 ? true : false;
 }
 
 //Load the category information using the ID in the URL.
 var keyValuePairs = window.location.search.substring(1).split("&");
 for (var i = 0; i < keyValuePairs.length; i++) {
     var splitted = keyValuePairs[i].split("=");
     if (splitted[0] == "id" && splitted.length > 1) {
         id = splitted[1];
     }
 }
 
 if (id) {
     sendRequest("GET", "API/V1/Category/" + id, onCategoryLoaded, onCategoryLoadingError);
 }