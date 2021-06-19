<?php
  include_once 'header.php'
?>

<section class="profile-form">
  <h2>Profile</h2>
  <div class="profile-form-form">
    <img class="profile-img" src="img/profile.png" style="width:80px;height=80px;">
    <form action="includes/profile.inc.php" method="post">
      <?php
        if (isset($_SESSION["username"])) {
          echo "<h3>" . $_SESSION["username"] . "</h3>";
        }
      ?>
    </form>
  </div>
</selection>



<?php
include_once 'footer.php'
?>
