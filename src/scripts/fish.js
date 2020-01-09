import rightFish from "../assets/images/right-fish.png";
import leftFish from "../assets/images/left-fish.png";
import leftMyst from "../assets/images/left-myst-fish.png";
import rightMyst from "../assets/images/right-myst-fish.png";
import leftMediumFish from "../assets/images/left-medium-fish.png";
import rightMediumFish from "../assets/images/right-medium-fish.png";

class StandardFish {
    constructor () {
        this.x = 10 + Math.random() * 940;
        this.y = 330 + Math.random() * 120;
        this.width = 30
        this.height = 25
        this.score = 20
        this.type = "standard"
        this.time = 2
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
        debugger
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
    this.score = 100;
    this.time = 5
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

class MystFish {
  constructor() {
    this.x = 10 + Math.random() * 940;
    this.y = 330 + Math.random() * 120;
    this.width = 150;
    this.height = 40;
    this.score = 500;
    this.time = 10
    this.type = "myst";
    this.direction = Math.floor(Math.random() * 2);
    this.dx = 1 + Math.floor(Math.random() * 2);
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


const levelChecker = {
  level3: false
}

const FishArray = {}

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



function DrawFish(ctx, spacePressed, rod) {
  if (rod.score >= 1000 && ("level3" in levelChecker)) {
   levelChecker.level3 = true
  }
  if (levelChecker.level3) {
    const mystFish = new MystFish();
    FishArray[mystFish.id] = mystFish;
    delete levelChecker["level3"]
  }

  Object.values(FishArray).forEach(fish => {
      ctx.beginPath();
      ctx.drawImage(fish.fishImage, fish.x, fish.y);
      ctx.fill();
      ctx.closePath();
      fish.moveFish();
      if (spacePressed) {
        const collided = fish.detectCollision({x: rod.x, y: rod.y, rodX: rod.rodX})
        if (collided && fish.type === "standard") {
          rod.score = rod.score + fish.score
          rod.time = fish.time
          if (rod.score <= 200) {
            delete FishArray[fish.id];
            const respawn1 = new StandardFish
            const respawn2 = new StandardFish
            FishArray[respawn1.id] = respawn1
            FishArray[respawn2.id] = respawn2
          } else if (rod.score >= 201 && rod.score <= 400) {
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
          delete FishArray[fish.id];
          const respawn1 = new MediumFish
          FishArray[respawn1.id] = respawn1 
        }
        if (collided && fish.type === "myst") {
          rod.score = rod.score + fish.score;
          delete FishArray[fish.id];
          respawnMystFish()
        }
      }
  })
}

export default DrawFish;