/* eslint-disable import/no-cycle */
/* eslint-disable no-new */
import Phaser from 'phaser';
import config from '../config/config';
import Button from '../config/buttons';

// preloadGame scene
class preloadGame extends Phaser.Scene {
  constructor() {
    super('PreloadGame');
  }

  create() {
    // setting player animation
    this.background = this.add.image(config.width / 2, config.height / 2, 'cover');
    new Button(this, 400, 250, 'start_button', 'PlayGame');
    new Button(this, 400, 300, 'score_btn', 'Leaderboard');
    new Button(this, 400, 350, 'how_to', 'HowTo');
    new Button(this, 750, 550, 'credit', 'GiveCredit');
  }
}

export default preloadGame;