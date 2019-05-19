import Phaser from 'phaser';

let game;
let gameConfig;

function startGame() {
  gameConfig = {
    parent: 'appContainer',
    width: 240,
    height: 320,
    backgroundColor: 0xff0000,
    scene: [bootGame, playGame],
  };
  game = new Phaser.Game(gameConfig);
  window.focus();
  resizeGame();
  window.addEventListener('resize', resizeGame);
}

class bootGame extends Phaser.Scene {
  constructor() {
    super('BootGame');
  }
  create() {
    this.scene.start('PlayGame');
  }
}
class playGame extends Phaser.Scene {
  constructor() {
    super('PlayGame');
  }
  create() {
    console.log('this is my awesome game');
    console.log(document.querySelector('canvas'));
  }
}
///////////////////////
function resizeGame() {
  var canvas = document.querySelector('canvas');
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  var windowRatio = windowWidth / windowHeight;
  var gameRatio = game.config.width / game.config.height;
  if (windowRatio < gameRatio) {
    canvas.style.width = windowWidth + 'px';
    canvas.style.height = windowWidth / gameRatio + 'px';
  } else {
    canvas.style.width = windowHeight * gameRatio + 'px';
    canvas.style.height = windowHeight + 'px';
  }
}

startGame();
