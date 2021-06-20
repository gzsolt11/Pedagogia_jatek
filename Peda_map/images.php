<?php
$levelId  = $_GET['id'];
?>
<!DOCTYPE html>
<html lang = "en" dir = "ltr">
    <head>
        <meta charset = "utf-8">
        <title> Image slider</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <!-- Image slider star -->
        <div class = "slider">
            <div class = "slides">
                <!-- radio button start -->
                <input type = "radio" name = "radio-btn" id = "radio1" checked>
                <input type = "radio" name = "radio-btn" id = "radio2">
                <input type = "radio" name = "radio-btn" id = "radio3">
                <!-- radio button end -->

                <!-- Slide image start -->
                <div class = "slide first">
                    <img src = "images/<?= $levelId."1" ?>.png" alt = "">
                </div>
                <div class = "slide">
                    <img src = "images/<?= $levelId."2" ?>.png" alt = "">
                </div>
                <div class = "slide">
                    <img src = "images/<?= $levelId."3" ?>.png" alt = "">
                </div>
                <!-- Slide image end -->

                <!-- automatic navigation start -->
                <div class = "navigation-auto">
                    <div class = "auto-btn1"></div>
                    <div class = "auto-btn2"></div>
                    <div class = "auto-btn3"></div>
                </div>
                <!-- automatic navigation end -->
            </div>
            <!-- manual navigation start-->
            <div class = "navigation-manual">
                <label for = "radio1" class = "manual-btn"></label>
                <label for = "radio2" class = "manual-btn"></label>
                <label for = "radio3" class = "manual-btn"></label>
            </div>
 
            <div id = "start">
                <a href = "https://google.com"><button class="start">Start</button></a> <!--atlinkelni majd a megfelelo palyara-->
            </div>
            <!-- manual navigation end-->
        </div>
        <!-- image slider end -->

        <script type="text/javascript">
            var counter = 2;
            show();
            setInterval(function(){
                try{
                    document.getElementById('radio' + counter).checked = true;
                }
                catch{
                }
                show();
                counter++;
            }, 15000)

            function show(){
                if (document.getElementById('radio3').checked){
                document.getElementById('start').style.visibility = 'visible';
                }
                else{
                    document.getElementById('start').style.visibility = 'hidden';
                }
            }
            
        </script>
    </body>
</html>
