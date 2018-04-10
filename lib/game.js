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
        this.ended = false;
    }

    checkCollision() {
        this.pipes.forEach(pipe => {
            if (pipe.hit(this.sheen)) {
                key.unbind("space");
                // this.ended = true;
            }
        })
    }

    draw(ctx) {
        console.log("drawing...")
        console.log(this.pipes.length)
        this.frameCount ++;
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, this.width, this.height);

        if (this.frameCount % 110 == 0) {
            this.pipes.push(new Pipe(this.width, this.height))
        }

        for (let i = this.pipes.length - 1; i >= 0; i--) {
            this.pipes[i].draw(ctx);
            if (this.pipes[i].isOffscreen()) {
                this.pipes.splice(i, 1);
            }
        }

        this.sheen.draw(ctx); 

        if (this.sheen.hitGround()) {
            this.ended = true;
        }
    }
    
    step() {
        this.sheen.move();

        this.pipes.forEach(pipe => {
            pipe.move();
        })

        this.checkCollision();
    }
}

export default Game;