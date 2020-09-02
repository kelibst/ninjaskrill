import BootScene from '../scenes/bootScene';
import GameScene from '../scenes/gameScene';
import preloadGame from '../scenes/preloadGame';
import playGame from '../scenes/playGame';
let config={
    width: 800,
    height: 600, 
    backgroundColor: 0x0c88c7,
    scene: [BootScene, GameScene, preloadGame, playGame],
    physics: {
        default: "arcade"
    },
    pixelArt: true,
    resize(){
        let canvas = document.querySelector("canvas");
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;
        let windowRatio = windowWidth / windowHeight;
        let gameRatio = this.width / this.height;
        if(windowRatio < gameRatio){
            canvas.style.width = windowWidth + "px";
            canvas.style.height = (windowWidth / gameRatio) + "px";
        }
        else{
            canvas.style.width = (windowHeight * gameRatio) + "px";
            canvas.style.height = windowHeight + "px";
        }
    }
}


export  {config}