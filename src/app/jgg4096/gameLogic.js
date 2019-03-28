// gameLogic.js
export function resizeGame() {
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

