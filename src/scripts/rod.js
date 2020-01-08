import leftFisherman from '../assets/images/left-fisherman.png';
import rightFisherman from '../assets/images/right-fisherman.png'

class Rod {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.rodX = this.x
    this.score = 0;
    this.time = 0
    this.image = new Image();
    this.direction = Math.floor(Math.random() * 2);
    if (this.direction === 0) {
      this.image.src = rightFisherman;
      this.rodX = this.x + 150
    } else {
      this.image.src = leftFisherman;
    }
  }

  flipFisherman(side) {
    if (side === "right") {
      this.image.src = rightFisherman;
      this.rodX = this.x + 150
    } else if (side === "left") {
      this.image.src = leftFisherman;
      this.rodX = this.x;
    }
  }

  // drawRod(ctx) {
  //     ctx.beginPath();
  //     ctx.moveTo(0, 250)
  //     ctx.lineTo(this.x, 250)
  //     ctx.lineTo(this.x, this.y);s
  //     ctx.lineWidth = "2"
  //     ctx.strokeStyle = "yellow"
  //     ctx.stroke();
  //     ctx.closePath();
  // }
  drawRod(ctx) {
    ctx.beginPath();
    ctx.drawImage(this.image, this.x, 200);
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(this.rodX, 200);
    ctx.lineTo(this.rodX, this.y);
    ctx.lineWidth = "2";
    ctx.strokeStyle = "gray";
    ctx.stroke();
    ctx.closePath();
  }
}



export default Rod;