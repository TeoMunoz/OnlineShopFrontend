<html>
    <head>

        <meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Create Product</title>

		<link rel="stylesheet" type="text/css" href="view/style.css">

<<<<<<< HEAD
		<script src="controller/comands.js"></script>
=======
		<script src="controller/commands.js"></script>
>>>>>>> 45af6071a8fbdef8280ecfc26321c0f37b09d722

    </head>
    <body>
        <div class="menu">
            <a href="home.php">Home</a>
        </div>
<<<<<<< HEAD
        <div>
			<div>
				<h1>Create Product</h1>
				<form onsubmit="onCreateProductFormSubmitted(event);">
	<div class="field">
		<label for="name-field">Product Name</label>
		<input type="text" id="name-field" required>
	</div>
    
	<div class="field">
		<label for="price-field">Price</label>
		<input type="number" id="price-field" min="0" required step=".01">
	</div>
    
	<div class="field">
		<label for="stock-field">Stock</label>
		<input type="number" id="stock-field" min="0" required>
	</div>
    
	<div class="field">
		<label for="category-select">Category</label>
		<select id="category-select">
			<option value="">(not listed)</option>
		</select>
	</div>
    
	<div class="field">
		<label for="description-field">Description</label>
		<textarea id="description-field"></textarea>
	</div>
    
	<div class="field">
		<label for="image-field">Img</label>
		<input type="text" id="image-field">

	<div class="field">
		<label for="sku-field">SKU</label>
		<input type="text" id="sku-field" required>
	</div>

	<div class="field">
		<input type="checkbox" id="active-checkbox">
		<label for="active-checkbox">Active</label>
	</div>

	</div>

	<div class="field">
		<label for="weight-field">Weight (g)</label>
		<input type="number" id="weight-field" min="0" step=".01">
	</div>

	<div class="field">
		<button type="submit">Save and Close</button>
	</div>
</form>

=======
>>>>>>> 45af6071a8fbdef8280ecfc26321c0f37b09d722
    </body>