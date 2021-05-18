import { Character } from "./character.js";
import { getDirection } from "./input.js";
import { getAngle } from "./input.js";
import { getWordRanges } from "./input.js";
import { Map } from "./map.js";
import { highlightWordRanges } from "./input.js";
import { resetTextArea } from "./input.js";
import {maps} from "./src/map.js";
import { setStartDirection } from "./input.js"
import { willCharacterMove } from "./input.js"

var canvas = document.getElementById("canvas");

var score = 0;

var userId = 3;

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
const MAXSCORE = 100;
var lostScore = 0;
let lastRenderTime = 0;
const renderSpeed = 1;
const playScreen = document.getElementById("playScreen");

export var mapIndex = 0;
var mapCoordinates = maps[mapIndex]['coordinates'];
var startDirection = maps[mapIndex]['startDirection'];
var isReplaceMap =maps[mapIndex]['isReplacing'];
var baseText = maps[mapIndex]['baseText'];
var difficulty = maps[mapIndex]['level'];
setDifficulty(difficulty);
setStartDirection(startDirection);
changeCodeType(isReplaceMap,baseText);


let map = new Map(mapCoordinates);
let character = new Character(GAME_WIDTH,GAME_HEIGHT,mapCoordinates[0]['x'],mapCoordinates[0]['y'],startDirection);
let isFailed = false;
//character.setRotate(startDirection);
let moveCounter = 0;
var lastAngle = character.angle;



function move(currentTime){

   window.requestAnimationFrame(move);

    const secondsSinceLastRender = (currentTime - lastRenderTime)/1000;

    if(secondsSinceLastRender < (1/renderSpeed)){
        return;
    }

    lastRenderTime = currentTime;
    var direction = {};
    direction = getDirection();
    var angle = getAngle();
    let range = getWordRanges();

    if(isCharacterOnMap(mapCoordinates,character.position)){
        if(direction != undefined){
            moveCounter+=1;
        }
        draw(range);
        update(direction,angle);

        if(character.position.x == mapCoordinates[mapCoordinates.length-1].x && character.position.y == mapCoordinates[mapCoordinates.length-1].y){
            if(!willCharacterMove()){
                map.isCharacterAtFinish();
                if(document.getElementById("blackTransparentScreen2").style.visibility != "visible"){
                    document.getElementById("modalSuccessTemp").innerHTML = '';
                    const scoreLine = document.createElement('p');
                    scoreLine.innerHTML = "You'r score: " + (MAXSCORE-lostScore) + "/" +MAXSCORE;
                    scoreLine.id = "failedTextLine";
                    document.getElementById("modalSuccessTemp").appendChild(scoreLine);
                    saveScoreToDatabase(userId,mapIndex,MAXSCORE-lostScore);
                }
                document.getElementById("blackTransparentScreen2").style.visibility = "visible";
                
                
            }else{
                isFailed = true;
                lostScore += 10;
                draw();
                update();
                showFailedScreen();
                return;
            }
        }
        
    }else{
        if(!isFailed){ 
            lostScore += 10;
            draw();
            update();
            if(maps[mapIndex]['level'] == "beginner"){
                highlightWordRanges(range);
            }
            showFailedScreen();
            return;
        }
    }
    
}
window.requestAnimationFrame(move);

function update(direction={x:0,y:0}, angle){
    if(angle == undefined){
        if(maps[mapIndex]['level'] == "advanced"){
            angle = lastAngle;
        }else{
            angle = 0;
        }
    }
    character.update(direction,angle,difficulty);
    
}

function draw(range = {start:0,end:0}){
    playScreen.innerHTML='';
    character.draw(playScreen);
    lastAngle = character.angle;
    map.draw(playScreen);
    if(!(range.start == 0 && range.end == 0)){
        highlightWordRanges(range);
    }
}


function isCharacterOnMap(mapCoordinates, characterPosition){
    if(mapCoordinates.some(coordinate => (coordinate.x === characterPosition.x && coordinate.y === characterPosition.y))){
        return true;
    }
    return false
}

function restartGame(){
    isFailed = false;
    resetTextArea();
    map.resetFinishTexture();
    character.setRotate(startDirection);
    setStartDirection(startDirection);
    changeCodeType(isReplaceMap,baseText);
    setDifficulty(difficulty);
    character.position.x = mapCoordinates[0]['x'];
    character.position.y = mapCoordinates[0]['y'];
    document.getElementById("inputField").style.background = "rgba(32, 177, 51, 0.89)";
    document.getElementById("blackTransparentScreen").style.visibility = "hidden";
    document.getElementById("blackTransparentScreen2").style.visibility = "hidden";
    draw();
    update();
    
}

var tryAgainButtons = document.getElementsByClassName("tryAgainButton");
for(var i = 0; i < tryAgainButtons.length; ++i){
    tryAgainButtons[i].addEventListener("click",restartGame);
}

var nextMapButton = document.getElementById("nextButton").addEventListener("click",nextMap);

function nextMap(){
    if(mapIndex < 5){
        mapIndex++;
        mapCoordinates = maps[mapIndex]['coordinates'];
        startDirection = maps[mapIndex]['startDirection'];
        isReplaceMap =maps[mapIndex]['isReplacing'];
        baseText =maps[mapIndex]['baseText'];
        difficulty = maps[mapIndex]['level'];
        setDifficulty(difficulty);
        setStartDirection(startDirection);
        character.setRotate(startDirection);
        map = new Map(mapCoordinates);
        restartGame();

        
    }
    var data = new FormData();
    data.append("score",score);
    data.append("map_id",mapIndex);

    var xhr = new XMLHttpRequest();
    xhr.open("POST","saveScoreInDB.php");
    xhr.onload = function(){
        console.log(this.response);
    }

    xhr.send(data);
}

function showFailedScreen(){
    document.getElementById("inputField").style.background = "red";
    isFailed = true;
    document.getElementById("blackTransparentScreen").style.visibility = "visible";
    const mistakeLine = document.createElement('p');
    mistakeLine.innerHTML = "You have got a mistake in line: " + (moveCounter);
    mistakeLine.id = "failedTextLine";
    if(maps[mapIndex]['level'] == "beginner"){
        document.getElementById("modalFailedTemp").innerHTML = '';
        document.getElementById("modalFailedTemp").appendChild(mistakeLine);
    }
    
}

function changeCodeType(isReplaceMap,baseText){
    if(isReplaceMap){
        document.getElementById("inputAndCodeField").style.visibility = "hidden";
        document.getElementById("replaceField").style.visibility = "visible";
        writeTextToReplaceCodeField(baseText);
    }else{
        document.getElementById("replaceField").style.visibility = "hidden";
        document.getElementById("inputAndCodeField").style.visibility = "visible";
    }
}

function writeTextToReplaceCodeField(text){
    var field = document.getElementById("replaceCodeField");
    var inputIDs = maps[mapIndex]['inputIDs'];
    var hashmap = new Map();
    var inputIDIndex = 0;
    hashmap["variable"] = 0;
    hashmap["lowerBoundary"] = 0;
    hashmap["upperBoundary"] = 0;
    hashmap["increment"] = 0;
    hashmap["command"] = 0;
    for(var j = 0; j < text.length; ++j){
        for(var i = 0 ; i < text[j].length; ++i){
            if(text[j][i] == '#'){
                var inputElement = document.createElement("input");
                inputElement.setAttribute("type", "text");
                inputElement.classList.add("replaceInput");
                inputElement.id = inputIDs[inputIDIndex]+hashmap[inputIDs[inputIDIndex]];
                hashmap[inputIDs[inputIDIndex]] = hashmap[inputIDs[inputIDIndex]] + 1;
                replaceCodeField.appendChild(inputElement);
                inputIDIndex += 1;
            }else if(text[j][i] == '&'){
                field.innerHTML += "<br>";
            }else if(text[j][i] == '%'){
                field.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;"
            }else{
                field.innerHTML = field.innerHTML + text[j][i];
            }
        }
        field.innerHTML += "<br>"; 
        
        
    }
    
}

function setDifficulty(difficulty){
    if(difficulty == "beginner"){
        if(maps[mapIndex]["command"][0] == "ifstatement"){
            document.getElementById("forwardButton").style.visibility = "hidden";
            document.getElementById("backwardButton").style.visibility = "hidden";
            document.getElementById("turnleftButton").innerHTML = "turn left";
            document.getElementById("turnrightButton").innerHTML = "turn right";

            var inputField = document.getElementById("inputField");
            for(var element of maps[mapIndex]["baseText"]){
                inputField.value = inputField.value + element +"\n";
            }
        }else{
            document.getElementById("forwardButton").innerHTML = "forward";
            document.getElementById("backwardButton").innerHTML = "turn backward";
            document.getElementById("turnleftButton").innerHTML = "turn left";
            document.getElementById("turnrightButton").innerHTML = "turn right";
        }
    }else if(difficulty == "advanced"){
        document.getElementById("forwardButton").innerHTML = "X = X + 1";
        document.getElementById("backwardButton").innerHTML = "X = X - 1";
        document.getElementById("turnleftButton").innerHTML = "Y = Y + 1";
        document.getElementById("turnrightButton").innerHTML = "Y = Y - 1";
    }
}

function setMapIndex(index){
    mapIndex = index;
}

function saveScoreToDatabase(userId, mapId, score){
    console.log("SAVING DATA");
    var data = new FormData();
    data.append('userId', userId);
    data.append('mapId', mapId);
    data.append('score',score);
    var httpr = new XMLHttpRequest();
    httpr.open("POST","saveScoreInDB.php",true);
    httpr.onload = function (){
        console.log(this.repsonse);
    }
    httpr.send(data);
}
