<?php
  include_once 'header.php'
?>
    <section class="index-intro">
    <?php
        if (isset($_SESSION["username"])):
     ?> 
        <div class="index">
          <h1 id="welcome">Welcome!</h1>
          <h2 id="underwelcome">Let's learn together, <?= $_SESSION['username'] ?>!</h2>
          <div id="welcomeTextBox">          
            <p>This is a game for kids who want to start learning programing. With this method it is easier to learn and it is more fun.</p>
          </div>
        </div>
      <?php endif;?>
      </selection>  

<?php
  include_once 'footer.php'
?>
