<html>
    <head>

        <meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Create Category</title>

		<link rel="stylesheet" type="text/css" href="view/style.css">

		<script src="controller/comands.js"></script>

    </head>
    <body>
        <div class="menu">
            <a href="home.php">Home</a>
        </div>
        <div>
			<div>
			<h1>Create Category</h1>
			<form onsubmit="onCreateCategoryFormSubmitted(event);">
				<div class="field">
					<label for="name-field">Category Name</label>
					<input type="text" id="name-field" required>
				</div>
				<div class="field">
					<input type="checkbox" id="active-checkbox">
					<label for="active-checkbox">Active</label>
				</div>
				<div class="field">
					<button class="button" type="submit">Save and Close</button>
				</div>
			</form>
			<script src="controller/category.js"></script>
			</div>
		</div>
    </body>