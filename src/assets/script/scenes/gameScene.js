import Phaser from 'phaser';
import config from '../config/config'

class GameScene extends Phaser.Scene{
    constructor(){
        super("playGame");
    }

    create(){
        this.add.text(20,20, "Playing Game", {font:"25px Arial", fill: "yellow"})
    }

    moveShip(ship, speed){
        ship.x -= speed; 
        if (ship.x < 0){
            this.resetShipPos(ship)
        }
    }

    resetShipPos(ship){
        ship.x = config.width;
        let randomY = Phaser.Math.Between(0, config.height)
        ship.y = randomY
    }

    update(){
        // this.moveShip(this.ship1, 1)
        // this.moveShip(this.ship2, 2);
        // this.moveShip(this.ship3, 3);
        // this.background.tilePositionX -=0.5
    }
}

export default GameScene;