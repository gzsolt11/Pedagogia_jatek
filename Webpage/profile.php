<?php
  include_once 'header.php';
  include 'includes/profile.inc.php';
?>

<section class="profile-form">  
  <div class="profile-form-form">
    <h2>Profile</h2><br>
    <div class="profile-content">
      <img class="profile-img" src="img/profile.png">
      <h3><?= $row["usersName"]?></h3><br>
      <h3><?= $_SESSION["username"]?></h3><br>     
      <h3><?= $row["usersEmail"]?></h3> 
    </div>    
  </div>
</selection>

<?php
include_once 'footer.php'
?>
