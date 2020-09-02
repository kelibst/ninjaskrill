import Phaser from 'phaser';
import {config} from '../config/config'

class GameScene extends Phaser.Scene{
    constructor(){
        super("playGame");
    }
    preload(){
        this.load.image('start_button', '../src/assets/img/buttons/start.png');
    }

    create(){
        this.starting = this.add.text(config.width/4,config.height/4, "Loading Game...", {font:"4rem Arial", fill: "yellow"})
       
      
        setTimeout(()=>{
            this.starting.destroy();
            this.startButton = this.add.image(config.width/5, config.height/5, "start_button");
            this.startButton.setInteractive();
            this.startButton.on('pointerdown', () => {
                this.scene.start("PreloadGame");
            });
        }, 3000)
    }
}

export default GameScene;