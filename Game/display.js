import { Character } from "./character.js";
import { getDirection } from "./input.js";
import { getAngle } from "./input.js";
import { getWordRanges } from "./input.js";
import { Map } from "./map.js";
import { highlightWordRanges } from "./input.js";
import { resetTextArea } from "./input.js";

var canvas = document.getElementById("canvas");
//var context = canvas.getContext("2d");


const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
let lastRenderTime = 0;
const renderSpeed = 1;
const playScreen = document.getElementById("playScreen");

let mapIndex = 0;

var maps = [[{x:2,y:2},{x:2,y:3},{x:2,y:4},{x:3,y:4},{x:4,y:4},{x:4,y:3},{x:4,y:2}],
            [{x:2,y:2},{x:2,y:3},{x:2,y:4},{x:3,y:4},{x:3,y:5},{x:3,y:6},{x:4,y:6}]]


var mapCoordinates = maps[mapIndex];

let character = new Character(GAME_WIDTH,GAME_HEIGHT);
let map = new Map(mapCoordinates);
let isFailed = false;
let moveCounter = 0;



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
            map.isCharacterAtFinish();
            document.getElementById("blackTransparentScreen2").style.visibility = "visible";
        }
        
    }else{
        if(!isFailed){ 
            draw();
            update();
            highlightWordRanges(range);
            showFailedScreen();
            return;
        }
    }
    
}
window.requestAnimationFrame(move);

function update(direction={x:0,y:0}, angle=0){
    character.update(direction,angle);
    
}


function draw(range = {start:0,end:0}){
    playScreen.innerHTML='';
    character.draw(playScreen);
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
    character.setRotate(0);
    character.position.x = mapCoordinates[0].x;
    character.position.y = mapCoordinates[0].y;
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
    mapIndex++;
    mapCoordinates = maps[mapIndex];
    map = new Map(mapCoordinates);
    restartGame();
}

function showFailedScreen(){
    document.getElementById("inputField").style.background = "red";
    isFailed = true;
    document.getElementById("blackTransparentScreen").style.visibility = "visible";
    const mistakeLine = document.createElement('p');
    mistakeLine.innerHTML = "You have got a mistake in line: " + (moveCounter);
    mistakeLine.id = "failedTextLine";
    document.getElementById("modalFailedTextBox").appendChild(mistakeLine);
}