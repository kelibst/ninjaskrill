/* eslint-disable import/no-cycle */
import Phaser from 'phaser';
import config from '../config/config';

class howToScene extends Phaser.Scene {
  constructor() {
    super('HowTo');
  }

  create() {
    this.cameras.main.setBackgroundColor('8a0000');
    this.creditsText = this.add.text(0, 0, 'Ninja Skrill \n How To play!', { fontSize: '32px', fill: '#fff' });
    this.image1 = this.add.image(400, 200, 'cover');
    this.madeByText2 = this.add.text(0, 0, 'Sometimes being a Ninja is hard work,\n But other times,\n it can be easy as \n running around, \n\n jumping, and literally avoiding fire.', { fontSize: '26px', fill: '#fff' });
    this.madeByText3 = this.add.text(0, 0, 'In this game you don\'t have\n to do much . Run around wait for the \n right time to jump by \n tapping or clicking the screen\n to avoid danger.\n', { fontSize: '26px', fill: '#fff' });
    this.madeByText4 = this.add.text(0, 0, 'Collect coins to increase \n you score and if\n you manage to beat one of the highest\n you can then earn \n your place at the table\n of real ninja on the leaderboard.', { fontSize: '26px', fill: '#fff' });
    this.zone = this.add.zone(config.width / 2, config.height / 2, config.width, config.height);
    this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this.skipText = this.add.text(10, 10, 'Press SPACE \n Or click on the screen \n to skip', { fontSize: '10px', fill: '#fff' });

    Phaser.Display.Align.In.Center(
      this.creditsText,
      this.zone,
    );

    Phaser.Display.Align.In.Center(
      this.image1,
      this.zone,
    );


    Phaser.Display.Align.In.Center(
      this.madeByText2,
      this.zone,
    );

    Phaser.Display.Align.In.Center(
      this.madeByText3,
      this.zone,
    );

    Phaser.Display.Align.In.Center(
      this.madeByText4,
      this.zone,
    );


    this.image1.setY(800);
    this.madeByText2.setY(1100);
    this.madeByText3.setY(1300);
    this.madeByText4.setY(1800);

    this.creditsTween = this.tweens.add({
      targets: this.creditsText,
      y: -200,
      duration: 3000,
      delay: 1000,
    });

    this.imageTween1 = this.tweens.add({
      targets: this.image1,
      y: -200,
      duration: 13000,
      delay: 1000,
    });

    this.madeByTween1 = this.tweens.add({
      targets: this.madeByText1,
      y: -200,
      duration: 14000,
      delay: 1000,
    });

    this.madeByTween2 = this.tweens.add({
      targets: this.madeByText2,
      y: -200,
      duration: 20000,
      delay: 1000,
    });

    this.madeByTween3 = this.tweens.add({
      targets: this.madeByText3,
      y: -200,
      duration: 25000,
      delay: 1000,
    });
    this.madeByTween4 = this.tweens.add({
      targets: this.madeByText4,
      y: -200,
      duration: 35000,
      delay: 1000,
    });
  }

  goBack() {
    this.scene.start('PreloadGame');
  }

  update() {
    if (this.keySpace.isDown) {
      this.goBack();
    }

    this.input.on('pointerdown', this.goBack, this);
  }
}

export default howToScene;