/* eslint-disable */
import Phaser from 'phaser';
import config from '../config/config';

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
    const suBstyle = {
      font: 'bold 1rem Arial', fill: 'yellow', boundsAlignH: 'center', boundsAlignV: 'middle',
    };
    this.background = this.add.image(config.width/2, config.height/2, 'cover');
    this.title = this.add.text(config.width / 4, config.width / 4, 'NINJA SKRILL', style);
    this.title = this.add.text(config.width / 2, config.height / 2 , 'By KeliB', suBstyle);

    this.title.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

    setTimeout(() => {
      this.scene.start('playGame');
    }, 3000);
  }
}
export default BootScene;