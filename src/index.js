import './styles/index.scss';
const Rod = require("./scripts/rod");
const DrawFish = require("./scripts/fish");


document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("myCanvas");
    const score = document.getElementById("user-score");
    const ctx = canvas.getContext("2d");
    let x = 250;
    let y = 300;
    const rod = new Rod(x, y);
    
    let spacePressed = false
    function draw() {
        score.innerText = `Score: ${rod.score}`
        rod.drawRod(ctx) 
        DrawFish(ctx, spacePressed, rod)
        document.onkeydown = e => {
            switch (e.keyCode) {
              case 32:
                spacePressed = true
                break;
              case 37:
                rod.x = e.shiftKey === true ? rod.x - 10 : rod.x - 5;
                if (rod.x < 10) rod.x = 10;
                rod.drawRod(ctx);
                break;
              case 38:
                rod.y = e.shiftKey === true ? rod.y - 10 : rod.y - 5;
                if (rod.y < 285) rod.y = 285;
                rod.drawRod(ctx);
                break;
              case 39:
                rod.x = e.shiftKey === true ? rod.x + 10 : rod.x + 5;
                if (rod.x > 950) rod.x = 950;
                rod.drawRod(ctx);
                break;
              case 40:
                rod.y = e.shiftKey === true ? rod.y + 10 : rod.y + 5;
                if (rod.y > 470) rod.y = 470;
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
        requestAnimationFrame(draw)
    }
    draw()





})