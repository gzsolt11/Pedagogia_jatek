import { Character } from "./character.js";


export class Map{
    constructor(mapCoordinates){
        this.mapCoordinates = mapCoordinates;

    }

    
    draw(playScreen){

        this.playScreen = playScreen;
        let character = new Character;
        let characterPosition = character.position;

        
        for(let i = 1; i <= 10; ++i){
            for(let j = 1; j <= 10; ++j){
                const indexing = document.createElement('p');
                indexing.innerHTML = i+","+j;
                indexing.style.gridRowStart = i;
                indexing.style.gridColumnStart = j;
                indexing.classList.add('indexing');
                playScreen.appendChild(indexing);
            }
        } 
            
        for(let i = 0; i < this.mapCoordinates.length; ++i){
            const mapElement = document.createElement('div');
            mapElement.style.gridRowStart = this.mapCoordinates[i].x;
            mapElement.style.gridColumnStart = this.mapCoordinates[i].y;
            mapElement.classList.add('map');
            if(i == this.mapCoordinates.length-1){
                mapElement.id = "finish";
            }
            playScreen.appendChild(mapElement);
        }

    }

    isCharacterAtFinish(){
        document.getElementById("finish").backgroundImage = "url(\"./src/gateopen.png\")";
    }

    resetFinishTexture(){
        document.getElementById("finish").backgroundImage = "url(\"./src/gate2.png\")";
    }
}
