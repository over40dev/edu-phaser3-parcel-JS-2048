// main entry index.js
import {
  jgg4096
} from './app/jgg4096';
import {resizeGame} from './app/jgg4096';


window.focus();
resizeGame();
window.addEventListener('resize', resizeGame);




console.log('game is about to begin!!');

