import Phaser from 'phaser';
import gameConfig from './app/jgg4096/gameConfig';
import {resizeGame} from './app/jgg4096/gameLogic';

function newGame(){
  if (game) return;

  game = new Phaser.Game(gameConfig);
  resizeGame(game);
}

let game;

if (!game) newGame();
