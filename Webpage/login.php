<?php
  include_once 'header.php'
?>
    <section class="singup-form">
      <h2>Log In</h2>
      <div class="signup-form-form">
        <form action="includes/login.inc.php" method="post">
          <input type="text" name="uid" placeholder="Email/Username...">
          <input type="password" name="pwd" placeholder="Password...">
          <button type="submit" name="submit">Log In</button>
        </form>
      </div>
      <?php
        if (isset($_GET["error"])) {
          if ($_GET["error"] == "emptyInput") {
            echo "<p>Fill in all fields!</p>";
          }
          else if ($_GET["error"] == "wronglogin"){
            echo "<p>Incorrect log in information!</p>";
          }
        }
      ?>
    </selection>

<?php
  include_once 'footer.php'
?>