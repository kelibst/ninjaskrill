/* eslint-disable  no-unused-vars */

import Phaser from 'phaser';

import config from './assets/script/config/config';


const Game = new Phaser.Game(config);
window.focus();
config.resize();


document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('resize', config.resize, false);
});
