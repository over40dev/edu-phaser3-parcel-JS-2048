import Phaser from 'phaser';
import {CST} from './constants';
// import gameConfig from './app/game4096/gameConfig';
// import {resizeGame} from './app/game4096/gameLogic';

let game;
window.onload = function(){
  const gameConfig = {
    width: 480,
    height: 640,
    parent: 'thegame',
    backgroundColor: 0xff0000,
    scene: [loadGame, play4096]
  }

  game = new Phaser.Game(gameConfig);
  window.focus();
  resizeGame();
}

// game code start

// >>>>>src/app/game4096/scenes/loadgame.js
class loadGame extends Phaser.Scene {
  constructor(){
    super({key: CST.scenes.LOAD});
  }

  preload(){
    this.load.image('emptytile', './app/game4096/assets/sprites/emptytile.png');
  }

  create(){
    this.scene.start(CST.scenes.PLAY4096);
  }
}

// >>>>>src/app/game4096/scenes/playgame.js
class play4096 extends Phaser.Scene {
  constructor(){
    super({key: CST.scenes.PLAY4096});
  }

  create(){
    
  }
}



// game code end


function resizeGame() {
  const canvas = document.getElementById('thegame');
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;
  let windowRatio = windowWidth / windowHeight;
  let gameRatio = game.scale.width / game.scale.height;

  if (windowRatio < gameRatio) {
    // reduce game size
    canvas.style.width = windowWidth + "px";
    canvas.style.height = (windowWidth / gameRatio) + "px";
  } else {
    // increase game size
    canvas.style.width = (windowHeight * gameRatio) + "px";
    canvas.style.height = windowHeight + "px";
  }
}