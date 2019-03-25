// gameConfig.js
import {
  playGame
} from './scenes';

export default {
  title: '4096',
  type: Phaser.AUTO,
  backgroundColor: 0x00ff00,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    parent: "thegame",
    width: 640,
    height: 480
  },
  scene: playGame
};
