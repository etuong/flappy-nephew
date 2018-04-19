class Pipe {
    constructor(canvasWidth, canvasHeight) {
        this.canvasHeight = canvasHeight;
        this.x = canvasWidth;
        this.width = 80;
        this.minPipeHeight = 50;
        this.maxPipeHeight = 430;
        this.minSpaceHeight = 160;
        this.maxSpaceHeight = 240;
        this.topPipeHeight = this.getRandomInt(this.minPipeHeight, this.maxPipeHeight + 1);
        this.bottomPipeHeight = this.calculateBottomPipe();
        this.speed = 3;
        this.scored = false;
    }

    calculateBottomPipe() {
        const spaceHeight = this.getSpaceHeight();
        return this.canvasHeight - this.topPipeHeight - spaceHeight;
    }

    draw(ctx) {
        let gradient = ctx.createLinearGradient(this.x, 0, this.x + this.width, 0);
        gradient.addColorStop(0, "#33cc33")
        gradient.addColorStop(1, "#99ff99")

        // top Pipe
        ctx.lineWidth = 3;
        ctx.strokeStyle = "black";
        ctx.strokeRect(this.x, 0, this.width, this.topPipeHeight - 20);
        ctx.fillStyle = gradient;
        ctx.fillRect(this.x, 0, this.width, this.topPipeHeight - 20);
        ctx.strokeRect(this.x - 5, this.topPipeHeight - 20, this.width + 10, 20);
        ctx.fillRect(this.x - 5, this.topPipeHeight - 20, this.width + 10, 20);

        // Bottom Pipe
        ctx.strokeRect(this.x, this.canvasHeight - (this.bottomPipeHeight - 20), this.width, this.bottomPipeHeight);
        ctx.fillRect(this.x, this.canvasHeight - (this.bottomPipeHeight - 20), this.width, this.bottomPipeHeight);
        ctx.strokeRect(this.x - 5, this.canvasHeight - this.bottomPipeHeight, this.width + 10, 20);
        ctx.fillRect(this.x - 5, this.canvasHeight - this.bottomPipeHeight, this.width + 10, 20);
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    getSpaceHeight() {
        const spaceAndBottomHeight = this.canvasHeight - this.topPipeHeight;
        const maxSpaceAvailable = spaceAndBottomHeight - this.minPipeHeight;

        if (maxSpaceAvailable > this.maxSpaceHeight) {
            return this.getRandomInt(this.minSpaceHeight, this.maxSpaceHeight + 1);
        } else {
            return this.getRandomInt(this.minSpaceHeight, maxSpaceAvailable)
        }
    }

    hit(sheen) {
        return (this.inRangeHor(sheen) && this.inRangeVer(sheen))
    }

    inRangeHor(sheen) {
        return ((sheen.x > this.x) && (sheen.x < this.x + this.width)) || ((sheen.x + sheen.width > this.x) && (sheen.x + sheen.width < this.x + this.width))
    }

    inRangeVer(sheen) {
        return ((sheen.y < this.topPipeHeight) || (sheen.y + sheen.height > this.canvasHeight - this.bottomPipeHeight))
    }

    isOffScreen() {
        return this.x < -this.width;
    }

    move() {
        this.x -= this.speed;
    }
}

export default Pipe;