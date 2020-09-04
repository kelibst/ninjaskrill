import Phaser from 'phaser';
import setUserName from '../script';
import { putScore } from '../config/leaderboard';

export default class PlayerInputScene extends Phaser.Scene {
  constructor() {
    super('PlayerInput');
  }

  create() {
    const latestUser = setUserName().getUserData();
    if (latestUser) {
      const inputUsername = latestUser.name;
      if (inputUsername !== '') {
        const loading = this.add.text(350, 250, 'Loading...', { color: 'white', fontFamily: 'Arial', fontSize: '24px ' });
        putScore(inputUsername, latestUser.score[latestUser.score.length - 1]).then((data) => {
          loading.destroy();
          this.scene.start('endGame');
        }).catch((err) => {
          this.add.text(350, 250, `Sorry Unable to set user ${err}`);
        });
      } else {
        this.add.text(350, 250, 'Sorry Unable to set user');
      }
    }
  }
}