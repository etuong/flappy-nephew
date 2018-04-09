class Pipe {
    constructor(game_height) {
        this.game_height = game_height;
        this.width = 80;

        // Height of top pipe is randomly generated.
        // Possible range of space is then calculated, then randomly generated.
        // Calculate height of bottom pipe based on top pipe and space in between.
        // this.top = Math.floor(Math.random() * (431 - 50)) + 50;
        this.top = this.getRandomInt(50, 431);

        // this.totalSpaceLeft = game_height - this.top;
        // this.maxSpace = this.totalSpaceLeft - 50;
        // this.space;
        // if (this.maxSpace > 240) {
        //     this.space = Math.floor(Math.random() * (241 - 160)) + 160;
        // } else {
        //     this.space = Math.floor(Math.random() * (this.maxSpace - 160)) + 160;
        // }

        // this.bottom = this.game_height - this.top - this.space;
        this.bottom = this.calculateBottomPipe();
    }

    calculateBottomPipe() {
        const spaceAndBottomHeight = this.game_height - this.top;
        const maxSpaceHeight = spaceAndBottomHeight - 50;
        let spaceHeight;

        if (maxSpaceHeight > 240) {
            spaceHeight = this.getRandomInt(160, 241);
        } else {
            spaceHeight = this.getRandomInt(160, maxSpaceHeight)
        }
        console.log("in calculateBottomePip")
        console.log(spaceHeight)
        return this.game_height - this.top - spaceHeight;
    }

    draw(ctx) {
        console.log("top")
        console.log(this.top)
        // console.log("space")
        // console.log(this.space)
        console.log("bottom")
        console.log(this.bottom)
        ctx.fillStyle = "white";
        ctx.fillRect(20, 0, this.width, this.top);
        ctx.fillRect(20, this.game_height-this.bottom, this.width, this.bottom);
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    move() {

    }
}

export default Pipe;