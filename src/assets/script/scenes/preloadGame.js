import Phaser from 'phaser';

// preloadGame scene
class preloadGame extends Phaser.Scene{
    constructor(){
        super("PreloadGame");
    }
    preload(){
        this.load.image("platform", "../src/assets/img/platform.png");
        this.load.image("background", "../src/assets/img/background2.png")
      

        // player is a sprite sheet made by 24x48 pixels
        this.load.spritesheet("player", "../src/assets/img/ninja.png", {
            frameWidth: 49,
            frameHeight: 59
        });

        // the coin is a sprite sheet made by 20x20 pixels
        this.load.spritesheet("coin", "../src/assets/img/coin.png", {
            frameWidth: 20,
            frameHeight: 20
        });

        // the firecamp is a sprite sheet made by 32x58 pixels
        this.load.spritesheet("fire", "../src/assets/img/fire.png", {
            frameWidth: 40,
            frameHeight: 70
        });

        // mountains are a sprite sheet made by 512x512 pixels
        this.load.spritesheet("mountain", "../src/assets/img/mountain.png", {
            frameWidth: 512,
            frameHeight: 512
        });
    }
    create(){

        // setting player animation
        this.anims.create({
            key: "run",
            frames: this.anims.generateFrameNumbers("player", {
                start: 2,
                end: 5
            }),
            frameRate: 15,
            repeat: -1
        });
        
        // setting coin animation
        this.anims.create({
            key: "rotate",
            frames: this.anims.generateFrameNumbers("coin", {
                start: 0,
                end: 5
            }),
            frameRate: 15,
            yoyo: true,
            repeat: -1
        });

        // setting fire animation
        this.anims.create({
            key: "burn",
            frames: this.anims.generateFrameNumbers("fire", {
                start: 0,
                end: 4
            }),
            frameRate: 15,
            repeat: -1
        });

        this.scene.start("PlayGame");
    }
}

export default preloadGame