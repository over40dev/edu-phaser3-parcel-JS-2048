// playScene.js
import Phaser from 'phaser';

export class playGame extends Phaser.Scene {
  constructor() {
    super("PlayGame");
  }

  create() {
    console.log('play');
  }
}
