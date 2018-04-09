import Sheen from "./sheen";
import Pipe from "./pipe";

class Game {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.sheen = new Sheen(height);
        this.pipe = new Pipe(height);
    }

    draw(ctx) {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, this.width, this.height);

        this.sheen.draw(ctx);

        this.pipe.draw(ctx);
    }

    generatePipes() {

    }
    
    step() {
        this.sheen.move();
        // checkcollision
    }
}

export default Game;