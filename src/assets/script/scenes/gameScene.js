import Phaser from 'phaser';
import config from '../config/config'

class GameScene extends Phaser.Scene{
    constructor(){
        super("playGame");
    }

    create(){
        this.add.text(20,20, "Playing Game", {font:"25px Arial", fill: "yellow"})
        setTimeout(()=>{
            this.scene.start("PreloadGame");
        }, 3000)
    }
}

export default GameScene;