import './styles/index.scss';
import Rod from "./scripts/rod";
import DrawFish from "./scripts/fish";
import splash from "./assets/images/splash-lake-dusk.jpg"
import backgroundImage from "./assets/images/lake-dusk.jpg";
import Timer from './scripts/timer';


document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("myCanvas");
  const score = document.getElementById("user-score");
  const timer = document.getElementById("timer");

  const splashImage = new Image
  splashImage.src = splash

  const background = new Image();
  background.src = backgroundImage;

  let timerSecs = 59
  timer.innerText = "Time: ";
  let span = document.createElement("span");
  span.innerText = "60";
  timer.appendChild(span);

  const ctx = canvas.getContext("2d");
  
  background.onload = () => {
    ctx.drawImage(background, 0, 0);
    ctx.beginPath();
    ctx.fillStyle = "#FE9D48";
    ctx.font = "300 48px Open Sans";
    ctx.fillText("Press  S  To START", 200, 150);
    ctx.closePath();
  }
  
  let x = 100;
  let y = 250;
  const rod = new Rod(x, y);
  let spacePressed = false
  const gameStart = {
    start: true
  }
  
  // if (gameStart.start) Timer(timer, timerSecs, rod);
  
  
  
  
  function draw() {
    ctx.clearRect(0, 0, 1000, 500);
    score.innerText = `Score: ${rod.score}`
    ctx.drawImage(background, 0, 0)
    rod.drawRod(ctx)
    DrawFish(ctx, spacePressed, rod)
    // if (gameStart.start) Timer(timer, timerSecs, rod)
    document.onkeydown = e => {
      switch (e.keyCode) {
          case 32:
            spacePressed = true;
            break;
            case 37: //Left
            rod.x = e.shiftKey === true ? rod.x - 10 : rod.x - 5;
            if (rod.x < 10) rod.x = 10;
            rod.drawRod(ctx);
            rod.flipFisherman("left")
            break;
            case 38: // Up
            rod.y = e.shiftKey === true ? rod.y - 10 : rod.y - 5;
            if (rod.y < 200) rod.y = 200;
            rod.drawRod(ctx);
            break;
            case 39: //Right
            rod.x = e.shiftKey === true ? rod.x + 10 : rod.x + 5;
            if (rod.x > 830) rod.x = 830;
            rod.drawRod(ctx);
            rod.flipFisherman("right")
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
        if (timer.innerText === "Time: 00") {
          gameStart["start"] = true
          ctx.clearRect(0, 0, 1000, 500);
          ctx.drawImage(background, 0, 0);
          
          ctx.beginPath();
          ctx.fillStyle = "#FE9D48";
          ctx.font = '48px Permanent Marker';
          ctx.fillText("Game Over", 300, 150);
          ctx.closePath();

          return;
        }
        // if (gameStart.start) Timer(timer, timerSecs, rod);
        requestAnimationFrame(draw)
        
      }
      // draw();
      window.addEventListener("keydown", (e)=> {
        if (e.keyCode === 83) {
          if (gameStart.start) {
            delete gameStart["start"]
            Timer(timer, timerSecs, rod);
            draw();
          }
        }
      })
    })