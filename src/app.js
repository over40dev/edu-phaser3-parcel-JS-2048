import Phaser from 'phaser';
// import gameConfig from './app/jgg4096/gameConfig';
// import {resizeGame} from './app/jgg4096/gameLogic';

const gameConfig = {
  title: '4096',
  type: Phaser.AUTO,
  backgroundColor: 0x00ff00,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    parent: "thegame",
    width: 640,
    height: 480
  }
};

window.game = new Phaser.Game(gameConfig);

window.focus();
resizeGame();
window.addEventListener('resize', resizeGame);


// game code start

// game code end


function resizeGame() {
  // let {width} = window.game.scale;
  // console.log(width);
  const canvas = document.querySelector('canvas');
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;
  let windowRatio = windowWidth / windowHeight;
  // let gameRatio = scale.width / config.height;
  let gameRatio = window.game.scale.width / window.game.scale.height;

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