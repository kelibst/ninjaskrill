/* eslint-disable  import/no-cycle */

import BootScene from '../scenes/bootScene';
import GameScene from '../scenes/gameScene';
import preloadGame from '../scenes/preloadGame';
import playGame from '../scenes/playGame';
import scoreScene from '../scenes/scoreScene';
import PlayerInputScene from '../scenes/scoreSetScene';
import endingScene from '../scenes/endingScene';
import giveCredit from '../scenes/creditScene';
import howToScene from '../scenes/how_toScene';

const config = {
  width: 800,
  height: 600,
  backgroundColor: 0x0c88c7,
  scene: [BootScene,
    GameScene,
    preloadGame,
    playGame,
    scoreScene,
    endingScene,
    PlayerInputScene,
    giveCredit,
    howToScene],
  physics: {
    default: 'arcade',
  },
  pixelArt: true,
  resize() {
    const canvas = document.querySelector('canvas');
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const windowRatio = windowWidth / windowHeight;
    const gameRatio = this.width / this.height;
    if (windowRatio < gameRatio) {
      canvas.style.width = `${windowWidth}px`;
      canvas.style.height = `${windowWidth / gameRatio}px`;
    } else {
      canvas.style.width = `${windowHeight * gameRatio}px`;
      canvas.style.height = `${windowHeight}px`;
    }
  },
};


export default config;