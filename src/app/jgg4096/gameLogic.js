// gameLogic.js
export function resizeGame(game) {
  const canvas = document.querySelector('canvas');
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;
  let windowRatio = windowWidth / windowHeight;
  // let gameRatio = config.width / config.height;
  let gameRatio = game.config.width / game.config.height;

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

