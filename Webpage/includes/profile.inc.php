<?php

  if (isset($_POST["submit"])) {
    $username = $_POST["uid"];
    $name = $_POST["name"];
    $email = $_POST["email"];

    require_once 'dbh.inc.php';

    $sql="SELECT * FROM useres WHERE usersName='$username'";

    $result=mysqli_query($conn, $sql);

    $rows=mysqli_num_rows($result);

    if (rows > 0) {
      $array=mysqli_fetch_assoc($result);
    }
  }
