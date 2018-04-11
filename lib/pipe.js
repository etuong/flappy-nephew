class Pipe {
    constructor(game_width, game_height) {
        this.game_height = game_height;
        this.x = game_width;
        this.width = 80;
        this.top = this.getRandomInt(50, 431);
        this.bottom = this.calculateBottomPipe();
        this.speed = 3;
        this.scored = false;
    }

    // Height of top pipe is randomly generated.
    // Possible range of space is then calculated, then randomly generated.
    // Calculate height of bottom pipe based on top pipe and space in between.
    // Min/max height for space: 160/240
    // Min/max height for pipe: 50/430
    calculateBottomPipe() {
        const spaceAndBottomHeight = this.game_height - this.top;
        const maxSpaceHeight = spaceAndBottomHeight - 50;
        let spaceHeight;

        if (maxSpaceHeight > 240) {
            spaceHeight = this.getRandomInt(160, 241);
        } else {
            spaceHeight = this.getRandomInt(160, maxSpaceHeight)
        }
    
        return this.game_height - this.top - spaceHeight;
    }

    draw(ctx) {
        let gradient = ctx.createLinearGradient(this.x, 0, this.x + this.width, 0);
        gradient.addColorStop(0, "#33cc33")
        gradient.addColorStop(1, "#99ff99")

        // Top Pipe
        ctx.lineWidth = 3;
        ctx.strokeRect(this.x, 0, this.width, this.top - 20);
        ctx.fillStyle = gradient;
        ctx.fillRect(this.x, 0, this.width, this.top - 20);
        ctx.strokeRect(this.x - 5, this.top - 20, this.width + 10, 20);
        ctx.fillRect(this.x - 5, this.top - 20, this.width + 10, 20);

        // Bottom Pipe
        ctx.strokeRect(this.x, this.game_height - (this.bottom - 20), this.width, this.bottom);
        ctx.fillRect(this.x, this.game_height - (this.bottom - 20), this.width, this.bottom);
        ctx.strokeRect(this.x - 5, this.game_height - this.bottom, this.width + 10, 20);
        ctx.fillRect(this.x - 5, this.game_height - this.bottom, this.width + 10, 20);
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    hit(sheen) {
        return (this.inRangeHor(sheen) && this.inRangeVer(sheen))
    }

    // 67 is width of Sheen
    inRangeHor(sheen) {
        return ((sheen.x > this.x) && (sheen.x < this.x + this.width)) || ((sheen.x + 67 > this.x) && (sheen.x + 67 < this.x + this.width))
    }

    // 80 is height of Sheen
    inRangeVer(sheen) {
        return ((sheen.y < this.top) || (sheen.y + 80 > this.game_height - this.bottom))
    }

    isOffscreen() {
        return this.x < -this.width;
    }

    move() {
        this.x -= this.speed;
    }
}

export default Pipe;