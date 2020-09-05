/* eslint-disable import/no-cycle */
import Phaser from 'phaser';
import config from '../config/config';

class giveCredit extends Phaser.Scene {
  constructor() {
    super('GiveCredit');
  }

  create() {
    this.cameras.main.setBackgroundColor('8a0000');
    this.creditsText = this.add.text(0, 0, 'Ninja Skrill \n Credits', { fontSize: '32px', fill: '#fff' });
    this.image1 = this.add.image(400, 200, 'cover');
    this.madeByText1 = this.add.text(0, 0, 'Created By: Keli Booster', { fontSize: '26px', fill: '#fff' });
    this.madeByText2 = this.add.text(0, 0, 'Big thanks to God almighty,\n and all those\n who in diverse ways\n contributed to the \n success of this game!', { fontSize: '26px', fill: '#fff' });
    this.madeByText3 = this.add.text(0, 0, 'This project was built during\n\nmy course at Microverse!', { fontSize: '26px', fill: '#fff' });
    this.madeByText4 = this.add.text(0, 0, 'Thanks to OpenGameArt.org for\n\nproviding the free assets\n\nI used in this game.', { fontSize: '26px', fill: '#fff' });
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
      this.madeByText1,
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
    this.madeByText1.setY(850);
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

export default giveCredit;