<html>
    <head>

        <meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Products</title>

		<link rel="stylesheet" type="text/css" href="view/style.css">

		<script src="controller/commands.js"></script>

    </head>
    <body>
        <div class="menu">
            <a href="home.php">Home</a>
        </div>
        <div>
			<div>
				<h1>Products</h1>
			</div>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
						<th>Stock</th>
						<th>Categori</th>
						<th>Description</th>
						<th>Img</th>
					</tr>
				</thead>
				<tbody id="product-table"></tbody>
			</table>
			<script src="controller/products.js"></script>
		</div>
    </body>