import { getDirection } from "./input.js"

export class Character{

    constructor(gameWidth, gameHeight,positionX, positionY,direction){

        if(Character.instance instanceof Character){
            return Character.instance;
        }

        
        this.width = 10;
        this.height = 10;

        this.position = {
            x: positionX,
            y: positionY
        };

        this.setRotate(direction);

        
        this.playScreen = null;

        Character.instance = this;
    }


    draw(playScreen){
        
        this.playScreen = playScreen;
        const character = document.createElement('div');
        character.style.gridRowStart = this.position.x;
        character.style.gridColumnStart = this.position.y;
        character.classList.add('character');
        character.id = "character";
        playScreen.appendChild(character);
        this.drawPositionOnCodePart(this.position.x,this.position.y);
    }

    update(direction,angle,difficulty){
        if(difficulty == "beginner"){
            this.rotate(angle);
            this.position.x += direction.x;
            this.position.y += direction.y;
        } else if(difficulty == "advanced"){
            this.activateRotation(angle);
            this.angle = angle;
            this.position.x += direction.x;
            this.position.y += direction.y;
        }

    }

    rotate(angle){
        this.angle += angle;
        this.angle = this.angle % 360;
        this.activateRotation(this.angle);
    }

    setRotate(direction){
        console.log(direction);
        var character = document.getElementsByClassName("character");

        switch(direction){
            case "down": this.angle = 0;
                break;
            case "up": this.angle = 180;
                break;
            case "left": this.angle = 90;
                break;
            case "right": this.angle = 270;
                break;
        }
        this.activateRotation(this.angle);
        console.log(this.angle);
    }

    activateRotation(angle){
        console.log("activation " + angle);
        var character = document.getElementsByClassName("character");

        for(var i = 0; i < character.length; ++i){
            switch(angle){
                case 0:character[i].style.transform = "rotateZ(0deg)";
                    break;
                case -0:character[i].style.transform = "rotateZ(0deg)";
                    break;
                case 90: character[i].style.transform = "rotateZ(90deg)";
                    break;
                case (-90):character[i].style.transform = "rotateZ(-90deg)";
                    break;
                case 180:character[i].style.transform = "rotateZ(180deg)";
                    break;
                case -180:character[i].style.transform = "rotateZ(-180deg)";
                    break;
                case 270:character[i].style.transform = "rotateZ(270deg)";
                    break;
                case -270:character[i].style.transform = "rotateZ(-270deg)";
                    break;
            }
            
        }
    }

    drawPositionOnCodePart(x,y){
        document.getElementById("characterPosition").innerHTML = "Your position on the map: X:"+x+" Y:"+y;
        document.getElementById("characterPosition2").innerHTML = "Your position on the map: X:"+x+" Y:"+y;
    }
    
}

