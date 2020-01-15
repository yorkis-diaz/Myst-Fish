import './styles/index.scss';
import Rod from "./scripts/rod";
import DrawFish from "./scripts/fish";
import splash from "./assets/images/splash-lake-dusk.jpg"
import backgroundImage from "./assets/images/lake-dusk.jpg";
import Timer from './scripts/timer';
import firebase from "firebase";
import firebaseConfig from './config/firebase';
import submitScore from './scripts/submit_score';
import checkScores from './scripts/check_scoreboard';


document.addEventListener("DOMContentLoaded", () => {
  firebase.initializeApp(firebaseConfig);
  firebase.analytics(firebase);
  const database = firebase.database();
  const ref = database.ref('scores')
  let leaderScores = {}

  const canvas = document.getElementById("myCanvas");
  const score = document.getElementById("user-score");
  const timer = document.getElementById("timer");
  const leaderboard = document.getElementById("leaderboard");
  const mainContent = document.getElementById("main-content")

  // Database function
  ref.orderByChild("score").limitToLast(10).on("value", snapshot => {
    if (leaderboard.childElementCount > 0) {
      for(let i = leaderboard.childNodes.length - 1; i >= 0; --i) {
        let child = leaderboard.childNodes[i]
        leaderboard.removeChild(child)
      }
    }
    leaderScores = {}
    snapshot.forEach(child => {
      leaderScores[child.key] = child.val()
    })

    
    Object.values(leaderScores).reverse().forEach(child => {
      const scoreLi = document.createElement('li')
      scoreLi.innerText = `${child.name} - ${child.score}`
      leaderboard.appendChild(scoreLi)
    })
  });

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
    ctx.font = "300 48px Permanent Marker";
    ctx.fillText("Press  S  To START", 200, 150);
    ctx.closePath();
  }
  
  // let x = 100;
  // let y = 250;
  let rod = new Rod();
  let spacePressed = false

  // const gameStart = {
  //   start: false
  // }

  let start = false,
    gameTimer = false,
    gameover = false,
    highscore = false

  
  
  
  
  function draw() {
    ctx.clearRect(0, 0, 1000, 500);
    score.innerText = `Score: ${rod.score}`
    ctx.drawImage(background, 0, 0)
    rod.drawRod(ctx)
    DrawFish(ctx, spacePressed, rod)
    if (!gameTimer) {
      Timer(timer, timerSecs, rod)
      gameTimer = true
    }
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
      }
    };
    document.onkeyup = e => {
      switch (e.keyCode) {
        case 32:
          spacePressed = false
          break;
      }
    }
      
    if ((timer.innerText === "Time: 00")) {
      gameover = true
      DrawFish(ctx, spacePressed, rod, gameover)

      ctx.clearRect(0, 0, 1000, 500);
      ctx.drawImage(background, 0, 0);
      ctx.beginPath();
      ctx.fillStyle = "#FE9D48";
      ctx.font = '48px Permanent Marker';
      ctx.fillText("Game Over", 300, 150);
      ctx.closePath();
    } 
    


    const id = requestAnimationFrame(draw)
    if (gameover) {
      document.onkeydown = null
      document.onkeyup = null
      cancelAnimationFrame(id)
      if (!checkScores(leaderScores, rod.score)) {
        highscore = true
        ctx.beginPath();
        ctx.fillStyle = "#FE9D48";
        ctx.font = "48px Permanent Marker";
        ctx.fillText("NEW HIGH SCORE!", 200, 80);
        ctx.closePath();
        const form = submitScore(ref, rod.score);
        mainContent.appendChild(form)
      } else {
        ctx.fillStyle = "#FE9D48";
        ctx.font = "48px Permanent Marker";
        ctx.fillText("Press R To Try Again", 200, 80);
        ctx.closePath();
      }
    }
  }
  const gameRestart = () => {
    rod = new Rod();
    gameTimer = false,
    gameover = false,
    highscore = false
    // timerSecs = 59
    span.innerText = "60"
    timer.innerHTML = ""
    timer.innerText = "Time: ";
    timer.appendChild(span)
    // ctx.drawImage(background, 0, 0);
  }
  window.addEventListener("keydown", (e)=> {
    if (e.keyCode === 83 && !start) {
      start = true
      draw();
    } else if (e.keyCode === 82 && (gameover && !highscore)) {
      gameRestart()
      draw()
    }
  })
})