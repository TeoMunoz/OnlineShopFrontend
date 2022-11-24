var request = null;
var currentSuccessCallback = null;
var currentErrorCallback = null;

function sendRequest(method, url, successCallback, errorCallback, body = null) {
	if (request) {
		alert("Request runing!!!");
		errorCallback(null);
		return;
	}

	currentSuccessCallback = successCallback;
	currentErrorCallback = errorCallback;

	var stringBody = null;
	if (body) {
		stringBody = JSON.stringify(body);
	}

	request = new XMLHttpRequest();
	request.open(method, url);
	request.setRequestHeader("Content-Type", "application/json");
	request.onreadystatechange = onReadyStateChange;
	request.send(stringBody);
}

function onReadyStateChange(event) {
	//Nothing if yet received an answer.
	if (request.readyState < 4) {
		return;
	}

	//Reset the request.
	var finishedRequest = request;
	request = null;

	//Show the login and Call error 401.
	if (finishedRequest.status == 401) {
		if (login.className.indexOf("visible") == -1) {
			login.classList.add("visible");
		}
	}

	//Make a error if request is not 200 or 201.
	if (finishedRequest.status != 200 && finishedRequest.status != 201) {
		currentErrorCallback(finishedRequest);

		return;
	}

	currentSuccessCallback(finishedRequest);
}