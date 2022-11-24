<html>
    <head>

        <meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Category</title>

		<link rel="stylesheet" type="text/css" href="view/style.css">

    </head>
    <body>
        <div class="menu">
            <a href="home.php">Home</a>
        </div>
        <div>
			<div>
				<h1>Categories</h1>
				<div>
				</div>
				<table>
					<thead>
						<tr>
							<th>Category-Name</th>
                            <th>ID-Category</th>
							<th>Active</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody id="categories-table"></tbody>
				</table>
				
				<script src="controller/categories.js"></script>
				<script>loadCategoryList();</script>
			</div>
		</div>
    </body>