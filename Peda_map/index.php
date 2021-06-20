<?php
    include_once 'db.php'
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Map</title>
        <link rel="stylesheet" href = "style.css">
    </head>
    <body>
        <div class = "container">
            <div class = "container1">
                <a href = "images.php?id=level1">
                    <button id = "1" class = "button button1"> Level 1
                        <div>
                            <div class = "score1" style="display: inline-block;"><img src="images/ufo.png" style="height: 25px;"></div>
                            <div class = "score2" style="display: inline-block;"><img src="images/ufo.png" style="height: 30px;"></div>
                            <div class = "score3" style="display: inline-block;"><img src="images/ufo.png" style="height: 25px;"></div>
                        </div>
                    </button>
                </a>
                <div></div>
                <a href = "images.php?id=level2">
                    <button id = "2" class = "button button2"> Level 2
                        <div>
                            <div class = "score1" style="display: inline-block;"><img src="images/ufo.png" style="height: 25px;"></div>
                            <div class = "score2" style="display: inline-block;"><img src="images/ufo.png" style="height: 30px;"></div>
                            <div class = "score3" style="display: inline-block;"><img src="images/ufo.png" style="height: 25px;"></div>
                        </div>
                    </button>
                </a>

                <a href = "images.php?id=level3">
                    <button id = "3" class = "button button1"> Level 3
                        <div>
                            <div class = "score1" style="display: inline-block;"><img src="images/ufo.png" style="height: 25px;"></div>
                            <div class = "score2" style="display: inline-block;"><img src="images/ufo.png" style="height: 30px;"></div>
                            <div class = "score3" style="display: inline-block;"><img src="images/ufo.png" style="height: 25px;"></div>
                        </div>
                    </button>
                </a>
            </div>
            <div class = "container2">
            <a href = "images.php?id=level4">
                    <button id = "4" class = "button button1"> Level 4
                        <div>
                            <div class = "score1" style="display: inline-block;"><img src="images/ufo.png" style="height: 25px;"></div>
                            <div class = "score2" style="display: inline-block;"><img src="images/ufo.png" style="height: 30px;"></div>
                            <div class = "score3" style="display: inline-block;"><img src="images/ufo.png" style="height: 25px;"></div>
                        </div>
                    </button>
                </a>
                
                <a href = "images.php?id=level5">
                    <button id = "5" class = "button button2"> Level 5
                        <div>
                            <div class = "score1" style="display: inline-block;"><img src="images/ufo.png" style="height: 25px;"></div>
                            <div class = "score2" style="display: inline-block;"><img src="images/ufo.png" style="height: 30px;"></div>
                            <div class = "score3" style="display: inline-block;"><img src="images/ufo.png" style="height: 25px;"></div>
                        </div>
                    </button>
                </a>

                <a href = "images.php?id=level6">
                    <button id = "6" class = "button button1"> Level 6
                        <div>
                            <div class = "score1" style="display: inline-block;"><img src="images/ufo.png" style="height: 25px;"></div>
                            <div class = "score2" style="display: inline-block;"><img src="images/ufo.png" style="height: 30px;"></div>
                            <div class = "score3" style="display: inline-block;"><img src="images/ufo.png" style="height: 25px;"></div>
                        </div>
                    </button>
                </a>
            </div>
        </div>

        <script type="text/javascript">
            <?php
                if ($result->num_rows > 0) {
                    // output data of each row
                    $data = array();
                    while($row = $result->fetch_assoc()) {
                        $d = array($row['level_id'] => $row['score']);
                        $data += $d;
                    }
                    $js_array = json_encode($data);
                    echo "var jsvar = '$js_array';"; 
                    $data = array();
                }
            ?>

            jsvar = JSON.parse(jsvar);
            for (var key in jsvar) {
                if (jsvar.hasOwnProperty(key)) {
                    a = document.getElementById(key);
                    score1 = a.getElementsByClassName('score1')[0]
                    score2 = a.getElementsByClassName('score2')[0]
                    score3 = a.getElementsByClassName('score3')[0]
                    if ( jsvar[key] >= 90){
                        score1.style.visibility = 'visible'
                        score2.style.visibility = 'visible'
                        score3.style.visibility = 'visible'
                    }
                    else if( jsvar[key] >= 50 ){
                        score1.style.visibility = 'visible'
                        score2.style.visibility = 'visible'
                    }
                    else{
                        score1.style.visibility = 'visible'
                    }
                }
            }
        </script>

    </body>
</html>