

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body id="body">

<!-- <canvas id="canvas">
</canvas> -->
<div class="playScreen" id="playScreen">
</div>


<div id="inputAndCodeField">
    <textarea autofocus id="inputField" class="inputField" name="codeInputField" id="" cols="30" rows="10"></textarea>
    <div id="characterInfo" class="characterInfo">
        <p id="characterPosition" class="characterPosition">1,1</p>
    </div>
    <textarea id="codeInputField" class="codeInputField" name="codeInputField" id="" cols="30" rows="10"></textarea>

    <div class="buttons">
        <button class="button" id="forwardButton">forward</button>
        <button class="button" id="backwardButton">turn backward</button>
        <button class="button" id="turnleftButton">turn left</button>
        <button class="button" id="turnrightButton">turn right</button>
        <button class="button" id="startButton">Start</button>
    </div>
</div>





<script src="display.js" defer type="module"></script>
<script src="character.js" defer type="module"></script>


<div id="blackTransparentScreen" class="blackTransparentScreen">
    <div id="modalFailed">
        <div id="modalFailedTextBox">
            <h3 id="failedTitle">Ooops, you have got a mistake!</h3>
            <p id="failedText" >Try again and correct your mistake!</p>
        </div>
        <button id="tryAgainButton" class="tryAgainButton">Try again</button>
    </div>
</div>

<div id="blackTransparentScreen2" class="blackTransparentScreen2">
    <div id="modalSuccess">
        <div id="modalSuccessTextBox">
            <h3 id="successTitle">You have made this map successfuly</h3>
            <p id="successText" >Try yourself on the next map!</p>
        </div>
        <button id="tryAgainButton" class="tryAgainButton">Try again</button>
        <button id="nextButton">Next map</button>
    </div>
</div>


</body>
</html>