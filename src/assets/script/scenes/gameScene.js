/* eslint-disable */

import Phaser from 'phaser';
import config from '../config/config';
import Button from '../config/buttons';

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
  }

  create() {
    this.starting = this.add.text(config.width / 4, config.height / 4, 'Loading Game...', { font: '4rem Arial', fill: 'yellow' });


    setTimeout(() => {
      this.starting.destroy();
      new Button(this, config.width / 3, config.height / 3, 'start_button', 'PreloadGame');
      new Button(this, config.width / 3, config.height / 3 + config.height / 10, 'score_btn', 'Leaderboard');
    }, 3000);
  }
}

export default GameScene;