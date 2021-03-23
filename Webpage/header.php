<?php
  session_start();
?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Peda</title>
    <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body class="bodywebpage">

    <nav>
      <div class="wrapper" id="menu">
        <ul>
          <li class="header-elemets"><a class="aweb" href="index.php">Home</a></li>
          <?php
            if (isset($_SESSION["useruid"])) {
              echo "<li class='header-elemets'><a class='aweb' href='profile.php'>Profile</a></li>";
              echo "<li class='header-elemets'><a class='aweb' href='includes/logout.inc.php'>Log out</a></li>";
              echo "<li class='header-elemets'><a class='aweb' href='../Map/index.php'>Map</a></li>";
            }
            else {
              echo "<li class='header-elemets'><a class='aweb' href='signup.php'>Sign up</a></li>";
              echo "<li class='header-elemets'><a class='aweb' href='login.php'>Log in</a></li>";
            }
          ?>
        </ul>
      </div>
    </nav>

  <div class="wrapper">
