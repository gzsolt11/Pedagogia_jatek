<?php
  include_once 'header.php'
?>
    <section class="index-intro">
      <?php
        if (isset($_SESSION["useruid"])) {
          echo "<p>Hi there " . $_SESSION["useruid"] . " !</p>";
        }
      ?>
      <h1>Welcome!</h1>
      <p>This is a game for kids who want to start learning programing. With this method it is easier to learn and it is more fun.</p>
    </selection>

<?php
  include_once 'footer.php'
?>
