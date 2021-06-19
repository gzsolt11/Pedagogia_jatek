<?php
  include_once 'header.php'
?>
    <section class="signup-form">
      <h2>Sign Up</h2>
      <div class="signup-form-form">
        <form class="signupblock" action="includes/signup.inc.php" method="post">
          <input type="text" name="name" placeholder="Full name...">
          <input type="text" name="email" placeholder="Email...">
          <input type="text" name="username" placeholder="Username...">
          <input type="password" name="pwd" placeholder="Password...">
          <input type="password" name="pwdrepeat" placeholder="Repeat password...">
          <button class="submitbutton" type="submit" name="submit">Sign up</button>
        </form>
      </div>
      <?php
        if (isset($_GET["error"])) {
          if ($_GET["error"] == "emptyInput") {
            echo "<p>Fill in all fields!</p>";
          }
          else if ($_GET["error"] == "invalidUName"){
            echo "<p>Invalid username!</p>";
          }
          else if ($_GET["error"] == "invalidEmail"){
            echo "<p>Invalid email!</p>";
          }
          else if ($_GET["error"] == "passwordsnotmatch"){
            echo "<p>Passwords does not match!</p>";
          }
          else if ($_GET["error"] == "usernametaken"){
            echo "<p>Username already taken!</p>";
          }
          else if ($_GET["error"] == "stmtfailed"){
            echo "<p>Something went wrong, try again!</p>";
          }
          else if ($_GET["error"] == "none"){
            echo "<p>You have signed up!</p>";
          }
        }
      ?>
    </selection>

<?php
  include_once 'footer.php'
?>
