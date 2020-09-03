import Phaser from 'phaser';

import { config } from './assets/script/config/config';

Phaser.Game(config);
window.focus();
document.addEventListener('DOMContentLoaded', () => {
  config.resize();
  window.addEventListener('resize', config.resize, false);
});
