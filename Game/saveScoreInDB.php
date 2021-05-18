<?php

$host = 'localhost';
$user='root';
$pass='';
$db="pedagogia";

$score = $_POST["score"];
$user_id = $_POST['userId'];
$map_id = $_POST["mapId"];
$id = 0;
print_r($_POST);

$con = mysqli_connect($host,$user,$pass,$db);

$sql = "INSERT INTO user_score (id, user_id, map_id, score) VALUES (?,?,?,?);";

$stmt = mysqli_stmt_init($con);
if (!mysqli_stmt_prepare($stmt, $sql)) {
    header("location: ../signup.php?error=stmtfailed");
    exit();
  }


mysqli_stmt_bind_param($stmt, "ssss", $id, $user_id, $map_id, $score);
mysqli_stmt_execute($stmt);
mysqli_stmt_close($stmt);

#$query = mysqli_query($con,$sql) or die(mysql_error());

#if($query == true){
#    echo "<h3>Inserted</h3>"
#}

?>