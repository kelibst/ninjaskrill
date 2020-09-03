import Phaser from 'phaser';
import { getScores } from '../config/leaderboard';
import Button from '../config/buttons';

export default class LeaderboardScene extends Phaser.Scene {
  constructor() {
    super('Leaderboard');
  }

  create() {
    this.cameras.main.setBackgroundColor('#000111');
    const loading = this.add.text(250, 250, 'Loading...').setTint(0xff00ff);
    new Button(this, 400, 550, 'menu', 'playGame');
    getScores().then((scores) => {
      loading.destroy();
      scores.sort((a, b) => b.score - a.score);
      this.add.text(100, 20, 'RANK  SCORE   NAME').setTint(0xff00ff);
      for (let i = 0; i <= 4; i += 1) {
        this.add.text(100, 90 * (i + 1), 'arcade', ` ${i + 1}     ${scores[i].score}   ${scores[i].user}`).setTint(0xff0000);
      }
    }).catch(() => {
      this.add.text(100, 100, 'There was an error while loading the server');
    });
  }
}