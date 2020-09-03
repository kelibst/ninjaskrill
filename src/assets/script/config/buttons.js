import 'phaser';

class Button extends Phaser.GameObjects.Container {
  constructor(scene, x, y, key1, targetScene) {
    super(scene);
    this.scene = scene;
    this.x = x;
    this.y = y;

    this.button = this.scene.add.sprite(0, 0, key1).setInteractive();
    // this.text = this.scene.add.text(0, 0, text, { fontSize: '32px', fill: '#fff' });
    // Phaser.Display.Align.In.Center( this.button);

    this.add(this.button);
    // this.add(this.text);

    this.button.on('pointerdown', () => {
      this.scene.scene.start(targetScene);
    });

    // this.button.on('pointerover', function () {
    //   this.button.setTexture(key2);
    // }.bind(this));

    this.button.on('pointerout', () => {
      this.button.setTexture(key1);
    });

    this.scene.add.existing(this);
  }
}

export default Button;