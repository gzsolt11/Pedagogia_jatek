<?php
  include_once 'header.php'
?>
    <section class="index-intro">
    <div class="index">
          <h1 id="welcome">Welcome!</h1>
    <?php if (isset($_SESSION["username"])):?>        
          <h2 id="underwelcome">Let's learn together, <?= $_SESSION['username'] ?>!</h2>          
      <?php endif;?>
      <div id="welcomeTextBox">          
          <p>This is a game for kids who want to start learning programing. With this method it is easier to learn and it is more fun.</p>
          </div>
        </div>
      </selection>  

<?php
  include_once 'footer.php'
?>
