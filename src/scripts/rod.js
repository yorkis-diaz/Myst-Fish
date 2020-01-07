class Rod {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.score = 0
    }

    drawRod(ctx) {
        ctx.clearRect(0, 0, 1000, 500)
        ctx.beginPath();
        ctx.moveTo(0, 250)
        ctx.lineTo(this.x, 250)
        ctx.lineTo(this.x, this.y);
        ctx.lineWidth = "2"
        ctx.strokeStyle = "yellow"
        ctx.stroke();
        ctx.closePath();
    }
}



module.exports = Rod;