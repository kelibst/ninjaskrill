import Phaser from 'phaser';
import { setUserName } from './assets/script/script';

import { config } from './assets/script/config/config';

const Game = new Phaser.Game(config);
window.focus();


document.addEventListener('DOMContentLoaded', (e) => {
  config.resize();
  window.addEventListener('resize', config.resize, false);
});
