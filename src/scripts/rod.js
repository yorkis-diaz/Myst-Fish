import fisherman from '../assets/images/fisherman2.png';
class Rod {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.score = 0
        this.image = new Image
        this.image.src = fisherman
    }

    // drawRod(ctx) {
    //     ctx.beginPath();
    //     ctx.moveTo(0, 250)
    //     ctx.lineTo(this.x, 250)
    //     ctx.lineTo(this.x, this.y);
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
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(this.x, 250);
        ctx.lineWidth = "2"
        ctx.strokeStyle = "yellow"
        ctx.stroke();
        ctx.closePath();
    }
}



export default Rod;