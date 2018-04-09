import Sheen from "./sheen";
import Pipe from "./pipe";

class Game {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.sheen = new Sheen(height);
        // this.pipe = new Pipe(width, height);
        this.pipes = [new Pipe(width, height)];
        this.frameCount = 0;
    }

    draw(ctx) {
        console.log("drawing...")
        this.frameCount ++;
        console.log(this.frameCount)
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, this.width, this.height);

        this.sheen.draw(ctx);

        if (this.frameCount % 110 == 0) {
            this.pipes.push(new Pipe(this.width, this.height))
        }

        this.pipes.forEach(pipe => {
            pipe.draw(ctx);
        })
        // this.pipe.draw(ctx);

        
    }

    generatePipes() {

    }
    
    step() {
        this.sheen.move();

        this.pipes.forEach(pipe => {
            pipe.move();
        })
        // this.pipe.move();
        // checkcollision
    }
}

export default Game;