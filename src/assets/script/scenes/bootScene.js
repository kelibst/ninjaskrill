import Phaser from 'phaser';
import {config} from '../config/config'
class BootScene extends Phaser.Scene{
    constructor(){
        super("bootGame"); 
    }

    preload(){
        this.load.image("cover", "../src/assets/img/ninjaS.png")
    }

    create(){
        this.background = this.add.tileSprite(config.width/2, config.height/2, config.width, config.height,'cover')
        this.starterText = this.add.text(20,20, "Loading Game......", {font: "25px Arial", fill: "yellow"});
        
        setTimeout(()=>{
            this.scene.start("playGame");
        }, 3000)
    }
}  
export default BootScene