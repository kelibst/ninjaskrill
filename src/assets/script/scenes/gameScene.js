import Phaser from 'phaser';
import { config } from '../config/config';
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