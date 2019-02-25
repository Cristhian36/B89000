<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>HomePage</title>
    <script
    src="https://code.jquery.com/jquery-3.3.1.min.js"
    integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
    crossorigin="anonymous"></script>

    <!--Font Awesome-->
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

    <!--Google Fonts-->
    <link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet">

    <!--Kite Menu CSS-->
    <link rel="stylesheet" href="vista/assets/css/kite-menu.css" />
    <link rel="stylesheet" href="vista/assets/css/slideWiz.css"/>
    <script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha384-nvAa0+6Qg9clwYCGGPpDQLVpLNn0fRaROjHqs13t4Ggj3Ez50XnGQqc/r8MhnRDZ" crossorigin="anonymous"></script>
  </head>
  <body>
    <?php
    include_once 'ModulosHomePage/cabecera.php';

    ?>

    <script src="vista/assets/js/jquery.kitemenu.js"></script>
    <script src="vista/assets/js/slideShow.js"></script>
    <script src="vista/assets/js/framework/slideWiz.js"></script>
    <script>
       $(".kite-menu").kiteMenu({
          kiteSkin: "rainbow",
          });
    </script>
  </body>
</html>
