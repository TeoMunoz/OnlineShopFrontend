<html>
    <head>

        <meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>login</title>

		<link rel="stylesheet" type="text/css" href="view/style.css">

		<script src="controller/commands.js"></script>

    </head>
    <body>
        <div class="login" id="login">
        <div class="login">
            <form id="login-form" onsubmit="authenticate(event);">
                <h1>Login</h1>
                <label>Name:</label><br>
                <input type="text" maxlength="250" id="username-field" placeholder="Username"><br>
                <label>Password:</label><br>
                <input type="password" id=""password-fiels placeholder="••••••••"><br>
                <button type="submit" id="login-button">Login</button>
            </form>
        </div>
    </body>
</html>
<script src="controller/authentication.js"></script>