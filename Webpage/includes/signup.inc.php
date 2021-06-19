<?php

if (isset($_POST["submit"])) {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $username = $_POST["username"];
  $pwd = $_POST["pwd"];
  $pwdrepeat = $_POST["pwdrepeat"];
  $parental = $_POST["parentok"];

  require_once 'dbh.inc.php';
  require_once 'functions.inc.php';

  if (emptyInputSignup($name, $username, $email, $pwd, $pwdrepeat, $parental) !== false) {
    header("location: ../signup.php?error=emptyInput");
    echo "<p>" . $_POST["parentok"] . "</p>";
    exit();
  }
  if (invalidUName($username) !== false) {
    header("location: ../signup.php?error=invalidUName");
    exit();
  }

  if (invalidEmail($email) !== false) {
    header("location: ../signup.php?error=invalidEmail");
    exit();
  }

  if (pwdMatch($pwd, $pwdrepeat) !== false) {
    header("location: ../signup.php?error=passwordsnotmatch");
    exit();
  }

  if (uNameExists($conn, $username, $email) !== false) {
    header("location: ../signup.php?error=usernametaken");
    exit();
  }

  createUser($conn, $name, $username, $email, $pwd);
}
else{
  header("location: ../signup.php");
  exit();
}
