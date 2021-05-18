import {maps} from "./src/map.js";
import { mapIndex } from "./display.js";



var startbutton = document.getElementById("startButton");
var startbutton2 = document.getElementById("startButton2");
var forwardButton = document.getElementById("forwardButton");
var backwardButton = document.getElementById("backwardButton");
var turnLeftButton = document.getElementById("turnleftButton");
var turnRightButton = document.getElementById("turnrightButton");
var textArea = document.getElementById("inputField");
var codeTextArea = document.getElementById("codeInputField");
var character = document.getElementsByClassName("character");

startbutton.addEventListener("click",readTextArea);
startbutton.addEventListener("click",transferTextToCode);
startbutton2.addEventListener("click",readReplacingArea);



let direction = {x:0, y:0}
let lastDirection = {x:0, y:0}
let isLeftMoving = false;
let isRightMoving = false;
let isDownMoving = false;
let isUpMoving = false;

let move = {x:0, y:0}
let moves = []

var angles =[];
var ranges = [];

function readTextArea(){
    var text = textArea.value;
    var lines = text.split("\n");
    setWordRanges();
    readLanguage(lines);
}


function transferTextToCode(){
    var startDirections = {x:0,y:0};
    var isLeftMovingCode = false;
    var isRightMovingCode = false;
    var isDownMovingCode= true;
    var isUpMovingCode = false;
    var text = textArea.value;
    var lines = text.split("\n");
    lines.forEach(element => {
        console.log(isLeftMovingCode + " " + isRightMovingCode + " " + isUpMovingCode + " " + isDownMovingCode);

        switch(element){
            case "forward": {
                if(isLeftMovingCode){
                    codeTextArea.value = codeTextArea.value + "Y = Y - 1\n";
                } else if(isRightMovingCode){
                    codeTextArea.value = codeTextArea.value + "Y = Y + 1\n";
                } else if(isDownMovingCode){
                    codeTextArea.value = codeTextArea.value + "X = X + 1\n";
                } else if(isUpMovingCode){
                    codeTextArea.value = codeTextArea.value + "X = X - 1\n";
                }
                break;
            }
            case "turn left":{
                codeTextArea.value = codeTextArea.value + "\n";
                if(isLeftMovingCode){
                    isLeftMovingCode = false;
                    isDownMovingCode = true;
                    startDirections.y = 1;
                    startDirections.x = 0;
                } else if(isRightMovingCode){
                    isRightMovingCode = false;
                    isUpMovingCode = true;
                    startDirections.y = -1;
                    startDirections.x = 0;
                } else if(isDownMovingCode){
                    isDownMovingCode = false;
                    isRightMovingCode = true;
                    startDirections.x = 1;
                    startDirections.y = 0;
                } else if(isUpMovingCode){
                    isUpMovingCode = false;
                    isLeftMovingCode = true;
                    startDirections.x = -1;
                    startDirections.y = 0;
                }
                break;
            }
            case "turn right":{
                codeTextArea.value = codeTextArea.value + "\n";
                if(isLeftMovingCode){
                    isLeftMovingCode = false;
                    isUpMovingCode = true;
                    startDirections.y = -1;
                    startDirections.x = 0;
                } else if(isRightMovingCode){
                    isRightMovingCode = false;
                    isDownMovingCode = true;
                    startDirections.y = 1;
                    startDirections.x = 0;
                } else if(isDownMovingCode){
                    isDownMovingCode = false;
                    isLeftMovingCode = true;
                    startDirections.x = -1;
                    startDirections.y = 0;
                } else if(isUpMovingCode){
                    isUpMovingCode = false;
                    isRightMovingCode = true;
                    startDirections.x = 1;
                    startDirections.y = 0;
                }
                break;
            }
            case "turn backward": {
                codeTextArea.value = codeTextArea.value + "\n";
                if(isLeftMovingCode){
                    isLeftMovingCode = false;
                    isRightMovingCode = true;
                    startDirections.y = 0;
                    startDirections.x = 1;
                } else if(isRightMovingCode){
                    isRightMovingCode = false;
                    isLeftMovingCode = true;
                    startDirections.y = 0;
                    startDirections.x = -1;
                } else if(isDownMovingCode){
                    isDownMovingCode = false;
                    isUpMovingCode = true;
                    startDirections.x = 0;
                    startDirections.y = -1;
                } else if(isUpMovingCode){
                    isDownMovingCode = false;
                    isDownMoving = true;
                    startDirections.x = 0;
                    startDirections.y = 1;
                }
                break;
            }
        }
    })
}

export function getDirection(){
    let firstMove = moves[0];
    moves = moves.slice(1,moves.length);
    return firstMove;
}

export function getAngle(){
    let firstAngle = angles[0];
    angles = angles.slice(1,angles.length);
    return firstAngle;
}

export function willCharacterMove(){
    console.log("MOVES:");
    console.log(moves);
    for(var i = 0; i < moves.length; ++i){
        if(moves[i].x != 0 || moves[i].y != 0){
            return true;
        }else{
            return false;
        }
    }
}

export function setWordRanges(){
    var text = textArea.value;
    var lines = text.split("\n");
    var startposition = 0;
    ranges.push({start:0, end: 0});
    lines.forEach(element => {
        var endposition = text.search("\n");
        if(endposition != -1){
            text = text.substring(0,endposition) + "." + text.substring(endposition+1,text.length);
        }
        if(text.substring(startposition,endposition).length > 8){
            //ranges.push({start:startposition, end: endposition});
            ranges.push({start:startposition, end: endposition});
        }else{
            ranges.push({start:startposition, end: endposition});
        }
        startposition = endposition+1;
    });
}

export function getWordRanges(){
    let firstRange = ranges[0];
    ranges = ranges.slice(1,ranges.length);
    return firstRange;
}


forwardButton.addEventListener("click",writeIntoTextArea);
backwardButton.addEventListener("click",writeIntoTextArea);
turnLeftButton.addEventListener("click",writeIntoTextArea);
turnRightButton.addEventListener("click",writeIntoTextArea);

function writeIntoTextArea(e){
    var caller = e.currentTarget;
    textArea.value = textArea.value + caller.innerHTML +"\n";
    // switch(caller.id){
    //     case "forwardButton": textArea.value = textArea.value + "forward\n";
    //         break;
    //     case "backwardButton":textArea.value = textArea.value + "turn backward\n";
    //         break;
    //     case "turnleftButton":textArea.value = textArea.value + "turn left\n";
    //         break;
    //     case "turnrightButton":textArea.value = textArea.value + "turn right\n";
    //         break;
    // }
}

export function highlightWordRanges(range){
    document.getElementById("inputField").focus();
    document.getElementById("inputField").setSelectionRange(range.start,range.end);
}

export function resetTextArea(){
    textArea.value = "";
    codeTextArea.value = "";
    document.getElementById("replaceCodeField").innerHTML = "";
    moves = []
    angles =[];
    ranges = [];
    direction.x = 0;
    direction.y = 0;
    isLeftMoving = false;
    isRightMoving = false;
    isDownMoving = false;
    isUpMoving = false;
}


export function setStartDirection(directionParam){
    switch(directionParam){
        case "down": 
            direction = {x:1, y:0};
            isDownMoving = true;
            break;
        case "up":
            direction = {x:-1, y:0};
            isUpMoving = true;
            break;
        case "left":
            direction = {x:0, y:-1};
            isLeftMoving = true;
            break;
        case "right":
            direction = {x:0, y:1};
            isRightMoving = true;
            break;
    }
}

function readLanguage(lines){
    if(maps[mapIndex]['level'] == "beginner"){
        lines.forEach(element => {
            switch(element){
                case "forward": {
                    angles.push(0);
                    let temp = direction;
                    moves.push({...temp});
                    break;
                }
                case "turn left":{
                    angles.push(-90);
                    moves.push({...move});
                    if(isLeftMoving){
                        isLeftMoving = false;
                        isDownMoving = true;
                        direction.x = 1;
                        direction.y = 0;
                    } else if(isRightMoving){
                        isRightMoving = false;
                        isUpMoving = true;
                        direction.x = -1;
                        direction.y = 0;
                    } else if(isDownMoving){
                        isDownMoving = false;
                        isRightMoving = true;
                        direction.y = 1;
                        direction.x = 0;
                    } else if(isUpMoving){
                        isUpMoving = false;
                        isLeftMoving = true;
                        direction.y = -1;
                        direction.x = 0;
                    }
                    break;
                }
                case "turn right":{
                    angles.push(90);
                    moves.push({...move});
                    if(isLeftMoving){
                        isLeftMoving = false;
                        isUpMoving = true;
                        direction.x = -1;
                        direction.y = 0;
                    } else if(isRightMoving){
                        isRightMoving = false;
                        isDownMoving = true;
                        direction.x = 1;
                        direction.y = 0;
                    } else if(isDownMoving){
                        isDownMoving = false;
                        isLeftMoving = true;
                        direction.y = -1;
                        direction.x = 0;
                    } else if(isUpMoving){
                        isUpMoving = false;
                        isRightMoving = true;
                        direction.y = 1;
                        direction.x = 0;
                    }
                    break;
                }
                case "turn backward": {
                    angles.push(180);
                    moves.push({...move});
                    if(isLeftMoving){
                        isLeftMoving = false;
                        isRightMoving = true;
                        direction.x = 0;
                        direction.y = 1;
                    } else if(isRightMoving){
                        isRightMoving = false;
                        isLeftMoving = true;
                        direction.x = 0;
                        direction.y = -1;
                    } else if(isDownMoving){
                        isDownMoving = false;
                        isUpMoving = true;
                        direction.y = 0;
                        direction.x = -1;
                    } else if(isUpMoving){
                        isUpMoving = false;
                        isDownMoving = true;
                        direction.y = 0;
                        direction.x = 1;
                    }
                    break;
                }

            }
        });
    } else if(maps[mapIndex]['level'] == 'advanced'){
        console.log(lines);
        lines.forEach(element => {
            element = element.split(" ").join("").toLowerCase();
            switch(element){
                case "x=x+1": {
                    isLeftMoving = false;
                    isRightMoving = false;
                    isDownMoving = true;
                    isUpMoving = false;
                    direction.y = 0;
                    direction.x = 1;
                    angles.push(0);
                    let temp = direction;
                    moves.push({...temp});
                    break;
                }
                case "x=x-1": {
                    isLeftMoving = false;
                    isRightMoving = false;
                    isDownMoving = false;
                    isUpMoving = true;
                    direction.y = 0;
                    direction.x = -1;
                    angles.push(180);
                    let temp = direction;
                    moves.push({...temp});
                    break;
                }
                case "y=y+1": {
                    isLeftMoving = false;
                    isRightMoving = true;
                    isDownMoving = false;
                    isUpMoving = false;
                    direction.y = 1;
                    direction.x = 0;
                    angles.push(270);
                    let temp = direction;
                    moves.push({...temp});
                    break;
                }
                case "y=y-1": {
                    isLeftMoving = true;
                    isRightMoving = false;
                    isDownMoving = false;
                    isUpMoving = false;
                    direction.y = -1;
                    direction.x = 0;
                    angles.push(90);
                    let temp = direction;
                    moves.push({...temp});
                    break;
                }
                case "break": {
                    isLeftMoving = false;
                    isRightMoving = false;
                    isDownMoving = false;
                    isUpMoving = false;
                    direction.y = 0;
                    direction.x = 0;
                    let temp = direction;
                    moves.push({...temp});
                    lines = [];
                    break;
                }
            }
        });
        
    }
}

function readReplacingArea(){
    var variable = [];
    var lowerBoundary = [];
    var upperBoundary = [];
    var increment = [];
    var command = [];
    var inputIDs = maps[mapIndex]['inputIDs'];

    if(maps[mapIndex]['baseText'] == ""){

        variable = maps[mapIndex]['variable'];
        lowerBoundary = maps[mapIndex]['lowerBoundary'];
        upperBoundary = maps[mapIndex]['upperBoundary'];
        increment = maps[mapIndex]['increment'];
        command = maps[mapIndex]['command'];
    }else{
        for(var k = 0; k < maps[mapIndex]['baseText'].length; ++k){
            if(maps[mapIndex]['variable'][k] == ""){
                variable.push(document.getElementById("variable"+k).value);
            }else{
                variable.push(maps[mapIndex]['variable'][k]);
            }

            if(maps[mapIndex]['lowerBoundary'][k] == ""){
                lowerBoundary.push(document.getElementById("lowerBoundary"+k).value);
            }else{
                lowerBoundary.push(maps[mapIndex]['lowerBoundary'][k]);
            }

            if(maps[mapIndex]['upperBoundary'][k] == ""){
                upperBoundary.push(document.getElementById("upperBoundary"+k).value);
            }else{
                upperBoundary.push(maps[mapIndex]['upperBoundary'][k]);
            }

            if(maps[mapIndex]['increment'][k] == ""){
                increment.push(document.getElementById("increment"+k).value);
            }else{
                increment.push(maps[mapIndex]['increment'][k]);
            }

            if(maps[mapIndex]['command'][k] == ""){
                command.push(document.getElementById("command"+k).value);
            }else{
                command.push(maps[mapIndex]['command'][k]);
            }
        }
    }

    console.log(variable + " " + lowerBoundary + " " + upperBoundary + " " + increment + " " + command);

    var commandList = [];
    for(var i = 0; i < command.length; ++i){
        command[i] = command[i].split(" ").join("").toLowerCase();
        console.log(command[i]);
        for(var j = 0; j < upperBoundary[i]-lowerBoundary[i]-1; ++j){
            commandList = commandList.concat(command[i]);
        }
    }
    console.log("commandlist");
    console.log(commandList);
    
    if(maps[mapIndex]['baseText'] == []){
        setWordRanges();
    }
    readLanguage(commandList);
}
