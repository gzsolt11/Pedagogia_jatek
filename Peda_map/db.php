<?php

$host = 'localhost';
$user='root';
$pass='';
$db="peda_game";

$conn = new mysqli($host, $user, $pass, $db);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * from scores";
$result = $conn->query($sql);
  
?>
