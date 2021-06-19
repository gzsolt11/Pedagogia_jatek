<?php

$username = $_SESSION["username"];

$sql = "SELECT * FROM users WHERE usersUserName= ?;";
require_once 'dbh.inc.php';
require_once 'functions.inc.php';
$stmt = mysqli_stmt_init($conn); //statement
mysqli_stmt_prepare($stmt, $sql);

mysqli_stmt_bind_param($stmt, "s", $username);
mysqli_stmt_execute($stmt);

$resultData = mysqli_stmt_get_result($stmt);

//ha van ilyen akkor true hanem false
$row = mysqli_fetch_assoc($resultData);
mysqli_stmt_close($stmt);