// bootScene.js
import Phaser from 'phaser';

export class bootGame extends Phaser.Scene {
  constructor() {
    super("BootGame");
  }

  create() {
    console.log('boot');
  }
}

