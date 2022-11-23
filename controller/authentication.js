var loginRequest = document.getElementById("login-request");

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

function onLoginError(request) {
	alert("False try again pless!!!");
}