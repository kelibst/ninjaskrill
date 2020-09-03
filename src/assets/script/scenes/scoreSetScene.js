import Phaser from 'phaser';
import setUserName from '../script';
import { putScore } from '../config/leaderboard';

export default class PlayerInputScene extends Phaser.Scene {
  constructor() {
    super('PlayerInput');
  }

  create() {
    const latestUser = setUserName().getUserData();
    if (latestUser.length) {
      const inputUsername = latestUser.name;
      if (inputUsername !== '') {
        const loading = this.add.text(350, 250, 'Loading...', { color: 'white', fontFamily: 'Arial', fontSize: '24px ' });
        putScore(inputUsername, localStorage.getItem('score')).then(() => {
          loading.destroy();
          this.scene.start('Title');
        }).catch((err) => {
          this.add.text(350, 250, `Sorry Unable to set user ${err}`);
        });
      } else {
        this.add.text(350, 250, 'Sorry Unable to set user');
      }
    }
  }
}