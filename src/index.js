import Phaser from 'phaser';
import {config} from './assets/script/config/config'

const Game = new Phaser.Game(config);
window.focus();

    

document.addEventListener('DOMContentLoaded', (e) => {
     
    config.resize(); 
    window.addEventListener("resize", config.resize, false);
})

