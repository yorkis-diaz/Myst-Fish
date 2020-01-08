import './styles/index.scss';
import Rod from "./scripts/rod";
import DrawFish from "./scripts/fish";
import splash from "./assets/images/splash-lake-dusk.jpg"
import backgroundImage from "./assets/images/lake-dusk.jpg";


document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("myCanvas");
  const score = document.getElementById("user-score");

  const splashImage = new Image
  splashImage.src = splash

    const background = new Image();
    background.src = backgroundImage;

  const ctx = canvas.getContext("2d");
  
  splashImage.onload = () => {
    ctx.drawImage(splashImage, 0, 0);
  }
  

  let x = 250;
  let y = 200;
  const rod = new Rod(x, y);
  let spacePressed = false
  const gameStart = {
    start: true
  }





  function draw() {
    ctx.clearRect(0, 0, 1000, 500);
    score.innerText = `Score: ${rod.score}`
    ctx.drawImage(background, 0, 0)
    rod.drawRod(ctx)
    DrawFish(ctx, spacePressed, rod)
    document.onkeydown = e => {
        switch (e.keyCode) {
          case 32:
            spacePressed = true;
            break;
          case 37: //Left
            rod.x = e.shiftKey === true ? rod.x - 10 : rod.x - 5;
            if (rod.x < 10) rod.x = 10;
            rod.drawRod(ctx);
            break;
          case 38: // Up
            rod.y = e.shiftKey === true ? rod.y - 10 : rod.y - 5;
            if (rod.y < 200) rod.y = 200;
            rod.drawRod(ctx);
            break;
          case 39: //Right
            rod.x = e.shiftKey === true ? rod.x + 10 : rod.x + 5;
            if (rod.x > 950) rod.x = 950;
            rod.drawRod(ctx);
            break;
          case 40: //Down
            rod.y = e.shiftKey === true ? rod.y + 10 : rod.y + 5;
            if (rod.y > 470) rod.y = 470;
            rod.drawRod(ctx);
            break;
          case 65: // Left
            rod.x = e.shiftKey === true ? rod.x - 10 : rod.x - 5;
            if (rod.x < 10) rod.x = 10;
            rod.drawRod(ctx);
            break;
          case 68: // Right
            rod.x = e.shiftKey === true ? rod.x + 10 : rod.x + 5;
            if (rod.x > 950) rod.x = 950;
            rod.drawRod(ctx);
            break;
          case 83: // Down
            rod.y = e.shiftKey === true ? rod.y + 10 : rod.y + 5;
            if (rod.y > 470) rod.y = 470;
            rod.drawRod(ctx);
            break;
          case 87: // Up
            rod.y = e.shiftKey === true ? rod.y - 10 : rod.y - 5;
            if (rod.y < 285) rod.y = 285;
            rod.drawRod(ctx);
            break;
        }
    };
    document.onkeyup = e => {
        switch (e.keyCode) {
          case 32:
            spacePressed = false
            break;
        }
    }
    if (rod.score <= 200) {
      requestAnimationFrame(draw)
    }
    
  }
  // draw();
  window.addEventListener("keydown", (e)=> {
    if (e.keyCode === 83) {
      if (gameStart.start) {
        draw();
        delete gameStart["start"]
      }
    }
  })
})