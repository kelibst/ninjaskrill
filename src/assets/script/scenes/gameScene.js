/* eslint-disable */

import Phaser from 'phaser';
import config from '../config/config';


import '../main.css';

class GameScene extends Phaser.Scene {
  constructor() {
    super('playGame');
  }

  preload() {
    this.load.image('start_button', '../src/assets/img/buttons/start.png');
    this.load.image('score_btn', '../src/assets/img/buttons/score.png');
    this.load.image('menu', '../src/assets/img/buttons/exit.png');
    this.load.html('name_form', '../src/assets/name_form.html');
    
    this.load.image('platform', '../src/assets/img/platform.png');
    this.load.image('background', '../src/assets/img/background2.png');

    this.load.audio('background_music', ['../src/assets/audio/backaudio.mp3']);
    this.load.audio('play_music', ['../src/assets/audio/black_sun.mp3']);


    // player is a sprite sheet made by 24x48 pixels
    this.load.spritesheet('player', '../src/assets/img/ninja.png', {
      frameWidth: 49,
      frameHeight: 59,
    });

    // the coin is a sprite sheet made by 20x20 pixels
    this.load.spritesheet('coin', '../src/assets/img/coin.png', {
      frameWidth: 20,
      frameHeight: 20,
    });

    // the firecamp is a sprite sheet made by 32x58 pixels
    this.load.spritesheet('fire', '../src/assets/img/fire.png', {
      frameWidth: 40,
      frameHeight: 70,
    });

    // mountains are a sprite sheet made by 512x512 pixels
    this.load.spritesheet('mountain', '../src/assets/img/trees.png', {
      frameWidth: 512,
      frameHeight: 512,
    });
    this.background = this.add.image(config.width/2, config.height/2, 'cover');
    this.starting = this.add.text(300, 300, 'Loading Game...', { font: '2rem Arial', fill: 'white' });

    this.musiConfig = {
      mute: false,
      loop: true,
      delay: 0
    }

    

    this.load.on('complete', () => {
      this.starting.destroy();
    });
  }

  create() {
    this.anims.create({
      key: 'run',
      frames: this.anims.generateFrameNumbers('player', {
        start: 2,
        end: 5,
      }),
      frameRate: 15,
      repeat: -1,
    });

    // setting coin animation
    this.anims.create({
      key: 'rotate',
      frames: this.anims.generateFrameNumbers('coin', {
        start: 0,
        end: 5,
      }),
      frameRate: 15,
      yoyo: true,
      repeat: -1,
    });

    // setting fire animation
    this.anims.create({
      key: 'burn',
      frames: this.anims.generateFrameNumbers('fire', {
        start: 0,
        end: 4,
      }),
      frameRate: 15,
      repeat: -1,
    });
    this.player = this.physics.add.sprite(400, 100, 'player');
    this.player.anims.play('run');
    setTimeout(()=>{
      this.player.anims.stop();
      this.scene.start('PreloadGame')
    }, 3000)
    const bgMusic = this.sound.add('play_music', { volume: 0.3 });
    bgMusic.play(this.musiConfig);
  }
}

export default GameScene;