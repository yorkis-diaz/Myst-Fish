import rightFish from "../assets/images/right-fish.png";
import leftFish from "../assets/images/left-fish.png";
import leftMyst from "../assets/images/left-myst-fish.png";
import rightMyst from "../assets/images/right-myst-fish.png";
import leftMediumFish from "../assets/images/left-medium-fish.png";
import rightMediumFish from "../assets/images/right-medium-fish.png";
import leftSickFish from "../assets/images/left-sick-fish.png";
import rightSickFish from "../assets/images/right-sick-fish.png";
import leftDownSickFish from "../assets/images/left-down-sick-fish.png";
import rightDownSickFish from "../assets/images/right-down-sick-fish.png";

class StandardFish {
    constructor () {
        this.x = 10 + Math.random() * 940;
        this.y = 330 + Math.random() * 120;
        this.width = 30
        this.height = 25
        this.score = 20
        this.type = "standard"
        this.time = 1
        this.alive = true
        this.direction = Math.floor(Math.random() * 2)
        this.dx = 1 + Math.floor(Math.random() * 2);
        this.fishImage = new Image
        if (this.direction === 0) {
            this.fishImage.src = rightFish;
        } else {
            this.fishImage.src = leftFish;
        }
    this.id = Math.random() * 10000;
    }

  moveFish() {
    if (this.direction === 0) {
      this.x = this.x + this.dx
      if (this.x >= 950) {
        this.direction = 1
        this.fishImage.src = leftFish;
      }
    } else {
      this.x = this.x - this.dx
      if (this.x <= 10) {
        this.direction = 0
        this.fishImage.src = rightFish;
      }
    }
  }

  detectCollision(rod) {
    let collision = false
    const fishTotalLength = this.x + this.width
    const fishTotalHeight = this.y + this.height
    if (rod.rodX >= this.x &&
      rod.rodX <= fishTotalLength &&
      rod.y >= (this.y + 10) &&
      rod.y <= fishTotalHeight
      ) {
      collision = true
    }
    return collision;
  }
}

class MediumFish {
  constructor() {
    this.x = 10 + Math.random() * 940;
    this.y = 330 + Math.random() * 120;
    this.width = 80;
    this.height = 39;
    this.score = 50;
    this.time = 2
    this.alive = true
    this.type = "medium";
    this.direction = Math.floor(Math.random() * 2);
    this.dx = 1 + Math.floor(Math.random() * 2);
    this.fishImage = new Image();
    if (this.direction === 0) {
      this.fishImage.src = rightMediumFish;
    } else {
      this.fishImage.src = leftMediumFish;
    }
    this.id = Math.random() * 10000;
  }

  moveFish() {
    if (this.direction === 0) {
      this.x = this.x + this.dx;
      if (this.x + 40 >= 950) {
        this.direction = 1;
        this.fishImage.src = leftMediumFish;
      }
    } else {
      this.x = this.x - this.dx;
      if (this.x <= 10) {
        this.direction = 0;
        this.fishImage.src = rightMediumFish;
      }
    }
  }

  detectCollision(rod) {
    let collision = false;
    const fishTotalLength = this.x + this.width;
    const fishTotalHeight = this.y + this.height;
    if (
      rod.rodX >= this.x &&
      rod.rodX <= fishTotalLength &&
      rod.y >= this.y + 10 &&
      rod.y <= fishTotalHeight
    ) {
      collision = true;
    }
    return collision;
  }
}

class SickFish {
  constructor() {
    this.x = 10 + Math.random() * 940;
    this.y = 330 + Math.random() * 120;
    this.width = 80;
    this.height = 39;
    this.score = 0;
    this.time = -6
    this.alive = true
    this.type = "sick";
    this.direction = Math.floor(Math.random() * 2);
    this.dx = 2;
    this.fishImage = new Image();
    if (this.direction === 0) {
      this.fishImage.src = rightSickFish;
    } else {
      this.fishImage.src = leftSickFish;
    }
    this.id = Math.random() * 10000;
  }

  moveFish() {
    if (this.alive) {
      if (this.direction === 0) {
        this.x = this.x + this.dx;
        if (this.x + 40 >= 950) {
          this.direction = 1;
          this.fishImage.src = leftSickFish;
        }
      } else {
        this.x = this.x - this.dx;
        if (this.x <= 10) {
          this.direction = 0;
          this.fishImage.src = rightSickFish;
        }
      }
    }
  }

  detectCollision(rod) {
    let collision = false;
    const fishTotalLength = this.x + this.width;
    const fishTotalHeight = this.y + this.height;
    if (
      rod.rodX >= this.x &&
      rod.rodX <= fishTotalLength &&
      rod.y >= this.y + 10 &&
      rod.y <= fishTotalHeight
    ) {
      collision = true;
    }
    return collision;
  }

  bellyUp () {
    if (this.y > 315) this.y = this.y - this.dx
    if (this.direction === 0){
      this.fishImage.src = rightDownSickFish;
    } else {
      this.fishImage.src = leftDownSickFish;
    }
  }
}

class MystFish {
  constructor() {
    this.x = 10 + Math.random() * 940;
    this.y = 330 + Math.random() * 120;
    this.width = 150;
    this.height = 40;
    this.score = 100;
    this.time = 4
    this.alive = true
    this.type = "myst";
    this.direction = Math.floor(Math.random() * 2);
    this.dx = 2;
    this.fishImage = new Image();
    if (this.direction === 0) {
      this.fishImage.src = rightMyst;
    } else {
      this.fishImage.src = leftMyst;
    }
    this.id = Math.random() * 10000;
  }
  moveFish() {
    if (this.direction === 0) {
      this.x = this.x + this.dx;
      if (this.x + 95 >= 950) {
        this.direction = 1;
        this.fishImage.src = leftMyst;
      }
    } else {
      this.x = this.x - this.dx;
      if (this.x <= 10) {
        this.direction = 0;
        this.fishImage.src = rightMyst;
      }
    }
  }

  detectCollision(rod) {
    let collision = false;
    const fishTotalLength = this.x + this.width;
    const fishTotalHeight = this.y + this.height;
    if (
      rod.rodX >= this.x &&
      rod.rodX <= fishTotalLength &&
      rod.y >= this.y + 10 &&
      rod.y <= fishTotalHeight
    ) {
      collision = true;
    }
    return collision
  }
}

let level3 = false

let FishArray = {}

for (let i = 0; i < 10; ++i) {
  const standardFish = new StandardFish;
  FishArray[standardFish.id] = standardFish
}




function respawnMystFish() {
  setTimeout(() => {
    const mystFish = new MystFish();
    FishArray[mystFish.id] = mystFish;
  }, 15000)
}

function respawnSickOrMedium () {
  const respawn1 = new MediumFish
  const respawn2 = new MediumFish
  const respawn3 = new SickFish
  const respawnArr = [respawn1, respawn2, respawn3]
  return respawnArr[Math.floor(Math.random()* 3)]
}

function countSick () {
  return Object.values(FishArray).filter(fish => fish instanceof SickFish).length
}

function DrawFish(ctx, spacePressed, rod, gameover) {


  if (rod.score >= 800 && !level3 && !gameover) {
    Object.values(FishArray).every(fish => fish.dx = fish.dx + 1)
    const sickFish = new SickFish
    const mystFish = new MystFish();
    FishArray[mystFish.id] = mystFish;
    FishArray[sickFish.id] = sickFish;
    level3 = true
  }

  Object.values(FishArray).forEach(fish => {
      ctx.beginPath();
      ctx.drawImage(fish.fishImage, fish.x, fish.y);
      ctx.fill();
      ctx.closePath();
      fish.moveFish();
      if (fish.alive === false) {
        fish.bellyUp()
        setTimeout(() => {
          delete FishArray[fish.id]
        }, 5000);
      }
      if (spacePressed) {
        const collided = fish.detectCollision({x: rod.x, y: rod.y, rodX: rod.rodX})
        if (collided && fish.type === "standard") {
          rod.score = rod.score + fish.score
          rod.time = fish.time;
          if (rod.score <= 140) {
            delete FishArray[fish.id];
            const respawn1 = new StandardFish
            const respawn2 = new StandardFish
            FishArray[respawn1.id] = respawn1
            FishArray[respawn2.id] = respawn2
          } else if (rod.score >= 141 && rod.score <= 400) {
            delete FishArray[fish.id];
            const respawn1 = new StandardFish
            FishArray[respawn1.id] = respawn1
          } else {
            delete FishArray[fish.id];
            const mediumFish = new MediumFish
            FishArray[mediumFish.id] = mediumFish 
          }
        }
        if (collided && fish.type === "medium") {
          rod.score = rod.score + fish.score
          rod.time = fish.time;

          delete FishArray[fish.id];

          if (rod.score > 1000 && countSick() < 5) {
            const respawn = respawnSickOrMedium()
            FishArray[respawn.id] = respawn
          } else {
            const respawn = new MediumFish
            FishArray[respawn.id] = respawn
          } 
        }
        if (collided && fish.type === "myst") {
          rod.score = rod.score + fish.score;
          rod.time = fish.time;
          delete FishArray[fish.id];
          respawnMystFish()
        }
        if (collided && fish.type === "sick") {
          rod.time = fish.time;
          fish.alive = false
          
        }
      }
  })
  if (gameover) {
    level3 = false
    FishArray = {}
    for (let i = 0; i < 10; ++i) {
      const standardFish = new StandardFish;
      FishArray[standardFish.id] = standardFish
    }
  }
}

export default DrawFish;