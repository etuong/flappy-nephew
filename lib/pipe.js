class Pipe {
    constructor(game_width, game_height) {
        this.game_height = game_height;
        this.x = game_width;
        this.width = 80;
        this.top = this.getRandomInt(50, 431);
        this.bottom = this.calculateBottomPipe();
        this.speed = 3;
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
        ctx.fillStyle = "green";
        ctx.fillRect(this.x, 0, this.width, this.top);
        ctx.fillRect(this.x, this.game_height-this.bottom, this.width, this.bottom);
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    hit(sheen) {
        return (this.inRangeHor(sheen) && this.inRangVer(sheen))
    }

    inRangeHor(sheen) {
        return ((sheen.x > this.x) && (sheen.x < this.x + this.width))
    }

    inRangVer(sheen) {
        return ((sheen.y < this.top) || (sheen.y > this.game_height - this.bottom))
    }

    isOffscreen() {
        return this.x < -this.width;
    }

    move() {
        this.x -= this.speed;
    }
}

export default Pipe;