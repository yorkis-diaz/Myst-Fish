class StandardFish {
    constructor () {
        this.x = 10 + Math.random() * 940;
        this.y = 330 + Math.random() * 120;
        this.width = 30
        this.height = 25
        this.score = 20
        this.direction = Math.floor(Math.random() * 2)
        this.dx = 1 + Math.floor(Math.random() * 2);
        this.fishImage = new Image
        if (this.direction === 0) {
            this.fishImage.src = "/images/right-fish.png"
        } else {
            this.fishImage.src = "/images/left-fish.png"
        }
    this.id = Math.random() * 10000;
    }

    moveFish() {
        if (this.direction === 0) {
            this.x = this.x + this.dx
            if (this.x >= 950) {
                this.direction = 1
                this.fishImage.src = "/images/left-fish.png";
            }
        } else {
            this.x = this.x - this.dx
            if (this.x <= 10) {
                this.direction = 0
                this.fishImage.src = "/images/right-fish.png";
            }
        }
    }

    detectCollision(rod) {
        let collision = false
        const fishTotalLength = this.x + this.width
        const fishTotalHeight = this.y + this.height
        if (rod.x >= this.x &&
            rod.x <= fishTotalLength &&
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
    this.score = 100
    this.direction = Math.floor(Math.random() * 2);
    this.dx = 1 + Math.floor(Math.random() * 2);
    this.fishImage = new Image();
    if (this.direction === 0) {
      this.fishImage.src = "/images/right-medium-fish.png";
    } else {
      this.fishImage.src = "/images/left-medium-fish.png";
    }
    this.id = Math.random() * 10000;
  }

  moveFish() {
    if (this.direction === 0) {
      this.x = this.x + this.dx;
      if (this.x + 40 >= 950) {
        this.direction = 1;
        this.fishImage.src = "/images/left-medium-fish.png";
      }
    } else {
      this.x = this.x - this.dx;
      if (this.x <= 10) {
        this.direction = 0;
        this.fishImage.src = "/images/right-medium-fish.png";
      }
    }
  }

  detectCollision(rod) {
    let collision = false;
    const fishTotalLength = this.x + this.width;
    const fishTotalHeight = this.y + this.height;
    if (
      rod.x >= this.x &&
      rod.x <= fishTotalLength &&
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
    this.score = 500
    this.direction = Math.floor(Math.random() * 2);
    this.dx = 1 + Math.floor(Math.random() * 2);
    this.fishImage = new Image();
    if (this.direction === 0) {
      this.fishImage.src = "/images/right-myst-fish.png";
    } else {
      this.fishImage.src = "/images/left-myst-fish.png";
    }
    this.id = Math.random() * 10000;
  }
  moveFish() {
    if (this.direction === 0) {
      this.x = this.x + this.dx;
      if (this.x + 95 >= 950) {
        this.direction = 1;
        this.fishImage.src = "/images/left-myst-fish.png";
      }
    } else {
      this.x = this.x - this.dx;
      if (this.x <= 10) {
        this.direction = 0;
        this.fishImage.src = "/images/right-myst-fish.png";
      }
    }
  }

  detectCollision(rod) {
    let collision = false;
    const fishTotalLength = this.x + this.width;
    const fishTotalHeight = this.y + this.height;
    if (
      rod.x >= this.x &&
      rod.x <= fishTotalLength &&
      rod.y >= this.y + 10 &&
      rod.y <= fishTotalHeight
    ) {
      collision = true;
    }
    return collision
  }
}



const FishArray = {}

for (let i = 0; i < 10; ++i) {
    const standardFish = new StandardFish;
    FishArray[standardFish.id] = standardFish
}

// const mystFish = new MystFish
// FishArray[mystFish.id] = mystFish
// firstMedium = new MediumFish
// secondMedium = new MediumFish
// FishArray[firstMedium.id] = firstMedium;
// FishArray[secondMedium.id] = secondMedium;



function DrawFish(ctx, spacePressed, rod) {
    Object.values(FishArray).forEach(fish => {
        ctx.beginPath();
        ctx.drawImage(fish.fishImage, fish.x, fish.y)
        ctx.closePath();
        fish.moveFish();
        if (spacePressed) {
            const collided = fish.detectCollision({x: rod.x, y: rod.y})
            if (collided && rod.score < 1000) {
                rod.score = rod.score + fish.score
                delete FishArray[fish.id]
                const respawn1 = new StandardFish
                const respawn2 = new StandardFish
                FishArray[respawn1.id] = respawn1
                FishArray[respawn2.id] = respawn2
            }
        }
    })
}

module.exports = DrawFish;