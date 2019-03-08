<?php session_start();

if (!isset($_SESSION['id_user'])) {
	header("location:../index.php");
}?>
<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title></title>
	<link rel="stylesheet" href="assets/css/bootstrap.min.css">
	<link rel="stylesheet" href="assets/css/animate.css">
</head>
<body>

<?php include('header_dentro.php');?>
	
<div class="container justify-content-center">
	<div class="row">
		<div class="col-sm-12 col-md-4 col-lg-4 pt-5 pb-3 bg-white">
			<?php include('slider.php');?>
		</div>
		<div class="col-sm-12 col-md-4 col-lg-4 pt-5">
			<div class="container">
				
				<h2>Aqui va el contenido</h2>


			</div>
		</div>
	</div>
</div>

<script src="assets/js/jquery.min.js"></script>
<script src="assets/js/bootstrap.min.js"></script>
</body>
</html>