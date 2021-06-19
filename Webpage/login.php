<?php
  include_once 'header.php'
?>
    <section class="login-form">
      <h2>Log In</h2>
      <div class="signup-form-form">
        <form action="includes/login.inc.php" method="post">
          <input type="text" name="username" placeholder="Email/Username...">
          <input type="password" name="pwd" placeholder="Password...">
          <div id="gomb">
            <button class="submitbutton" type="submit" name="submit">Log In</button>
          </div>
        </form>
      </div>
      <?php
        if (isset($_GET["error"])) {
          if ($_GET["error"] == "emptyInput") {
            echo "<p id=\"error\">Fill in all fields!</p>";
          }
          else if ($_GET["error"] == "wronglogin"){
            echo "<p id=\"error\">Incorrect log in information!</p>";
          }
        }
      ?>
    </selection>

<?php
  include_once 'footer.php'
?>
