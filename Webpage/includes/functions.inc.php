<?php

function emptyInputSignup($name, $username, $email, $pwd, $pwdrepeat, $parental){
  $result;
  if (empty($name) || empty($email) || empty($username) || empty($pwd) || empty($pwdrepeat) || $parental == 0) {
    $result = true;
  }
  else{
    $result = false;
  }
  return $result;
}

function invalidUName($username){
  $result;
  if (!preg_match("/^[a-zA-Z0-9]*$/", $username)) {
    $result = true;
  }
  else{
    $result = false;
  }
  return $result;
}

function invalidEmail($email){
  $result;
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $result = true;
  }
  else{
    $result = false;
  }
  return $result;
}

function pwdMatch($pwd, $pwdrepeat){
  $result;
  if ($pwd !== $pwdrepeat) {
    $result = true;
  }
  else{
    $result = false;
  }
  return $result;
}

function uNameExists($conn, $username, $email){
  $sql = "SELECT * FROM users WHERE usersUserName = ? OR usersEmail = ?;";
  $stmt = mysqli_stmt_init($conn); //statement
  if (!mysqli_stmt_prepare($stmt, $sql)) {
    header("location: ../signup.php?error=stmtfailed");
    exit();
  }

  //ss = stringstring
  mysqli_stmt_bind_param($stmt, "ss", $username, $email);
  mysqli_stmt_execute($stmt);

  $resultData = mysqli_stmt_get_result($stmt);

  //ha van ilyen akkor true hanem false
  if ($row = mysqli_fetch_assoc($resultData)) {
    return $row;
  }
  else {
    $result = false;
    return $result;
  }
  mysqli_stmt_close($stmt);
}

function createUser($conn, $name, $username, $email, $pwd){
  $sql = "INSERT INTO users (usersName, usersUserName, usersEmail, usersPwd) VALUES (?, ?, ?, ?);";
  $stmt = mysqli_stmt_init($conn); //statement
  if (!mysqli_stmt_prepare($stmt, $sql)) {
    header("location: ../signup.php?error=stmtfailed");
    exit();
  }

  $hashedPwd = password_hash($pwd, PASSWORD_DEFAULT);

  mysqli_stmt_bind_param($stmt, "ssss", $name, $username, $email, $hashedPwd);
  mysqli_stmt_execute($stmt);
  mysqli_stmt_close($stmt);
  header("location: ../signup.php?error=none");
  exit();
}

function emptyInputLogin($username, $pwd){
  $result;
  if (empty($username) || empty($pwd)) {
    $result = true;
  }
  else{
    $result = false;
  }
  return $result;
}

function loginUser($conn, $username, $pwd) {
  $uNameExists = uNameExists($conn, $username, $username);

  if ($uNameExists === false) {
    header("location: ../login.php?error=wronglogin");
    exit();
  }

  $pwdHashed = $uNameExists["usersPwd"];
  $checkPwd = password_verify($pwd, $pwdHashed);
  if ($checkPwd === false) {
    header("location: ../login.php?error=wronglogin");
    exit();
  }
  else if ($checkPwd === true) {
    session_start();
    print_r($uNameExists);
    $_SESSION["username"] = $uNameExists["usersUserName"];
    header("location: ../index.php");
    exit();
  }
}
