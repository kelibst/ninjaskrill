/* eslint-disable  no-unused-vars */

import Phaser from 'phaser';
import config from './assets/script/config/config';
import setUserName from './assets/script/script';

const user = setUserName().getUserData();
// reduce user score data to only 5
if (user) {
  if (user.score.length > 5) {
    user.score = user.score.sort((a, b) => b - a).slice(0, 5);
  }
  setUserName().updateData(user);

  const Game = new Phaser.Game(config);
} else {
  const user = setUserName().getUserData();
  const Game = new Phaser.Game(config);
}
