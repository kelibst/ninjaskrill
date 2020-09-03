import Phaser from 'phaser';
import { config } from '../config/config';

class BootScene extends Phaser.Scene {
  constructor() {
    super('bootGame');
  }

  preload() {
    this.load.image('cover', '../src/assets/img/ninjaS.png');
  }

  create() {
    const style = {
      font: 'bold 4rem Arial', fill: '#fff', boundsAlignH: 'center', boundsAlignV: 'middle',
    };
    this.background = this.add.tileSprite(config.width, config.height, config.width, config.height, 'cover');
    this.title = this.add.text(config.width / 4, config.width / 4, 'NINJA SKRILL', style);


    this.title.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

    setTimeout(() => {
      this.scene.start('playGame');
    }, 3000);
  }
}
export default BootScene;