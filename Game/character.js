import { getDirection } from "./input.js"

export class Character{

    constructor(gameWidth, gameHeight){

        if(Character.instance instanceof Character){
            return Character.instance;
        }
        
        this.width = 10;
        this.height = 10;

        this.position = {
            x: 2,
            y: 2
        };

        this.angle = 0;

        this.playScreen = null;
        

       Character.instance = this;
    }


    draw(playScreen){
        
        this.playScreen = playScreen;
        const character = document.createElement('div');
        character.style.gridRowStart = this.position.y;
        character.style.gridColumnStart = this.position.x;
        character.classList.add('character');
        character.id = "character";
        playScreen.appendChild(character);
    }

    update(direction,angle){
        this.rotate(angle);
        this.position.x += direction.x;
        this.position.y += direction.y;
        this.drawPositionOnCodePart(this.position.x,this.position.y);

    }

    rotate(angle){
        this.angle += angle;
        this.angle = this.angle % 360;
        var character = document.getElementsByClassName("character");

        for(var i = 0; i < character.length; ++i){
            switch(this.angle){
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

    setRotate(angle){
        this.angle = angle;
    }

    drawPositionOnCodePart(x,y){
        document.getElementById("characterPosition").innerHTML = "Your position on the map: X:"+x+" Y:"+y;
    }
    
}

