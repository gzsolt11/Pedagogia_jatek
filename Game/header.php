<?php
  session_start();
?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Peda</title>
    <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">
    <link rel="stylesheet" href="../Webpage/css/reset.css">
    <link rel="stylesheet" href="../Webpage/css/style.css">
  </head>
  <body>

    <nav>
      <div class="wrapper">
        <ul>
          <li class="header-elemets"><a href="index.php">Home</a></li>
          <?php
            if (isset($_SESSION["useruid"])) {
              echo "<li class='header-elemets'><a href='profile.php'>Profile</a></li>";
              echo "<li class='header-elemets'><a href='includes/logout.inc.php'>Log out</a></li>";
              echo "<li class='header-elemets'><a href='../Map/index.php'>Map</a></li>";
            }
            else {
              echo "<li class='header-elemets'><a href='signup.php'>Sing up</a></li>";
              echo "<li class='header-elemets'><a href='login.php'>Log in</a></li>";
            }
          ?>
        </ul>
      </div>
    </nav>

  <div class="wrapper">
