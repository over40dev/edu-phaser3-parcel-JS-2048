import Phaser from 'phaser';

let game;
let gameConfig;

(function startGame() {
  gameConfig = {
    parent: 'app-container',
    width: 480,
    height: 640,
    backgroundColor: 0x0000ff,
  };

  game = new Phaser.Game(gameConfig);
})();
