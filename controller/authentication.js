<<<<<<< HEAD
=======
var loginRequest = document.getElementById("login-request");

>>>>>>> 45af6071a8fbdef8280ecfc26321c0f37b09d722
var usernameField = document.getElementById("username-field");
var passwordField = document.getElementById("password-field");

/**
 * Make a AJAX request to validate the user and password
 */
function authenticate(event) {
	event.preventDefault();

	sendRequest("POST", "API/V1/Authenticate", onLoginCorrect, onLoginError,{
		username: usernameField.value,
		password: passwordField.value
	});
}

<<<<<<< HEAD
function onLoginCorrect(request) {
	window.open("../home.php", "_self");
}

function onLoginError(request) {
	alert("False try again pless!!!");
}

var button = document.getElementById("login-button");
button.addEventListener("click", authenticate);
=======
function onLoginError(request) {
	alert("False try again pless!!!");
}
>>>>>>> 45af6071a8fbdef8280ecfc26321c0f37b09d722
