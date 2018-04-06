import Sheen from "./sheen";

class Game {
    constructor() {
        this.sheen = new Sheen();
    }
    draw(ctx) {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, 480, 640);

        this.sheen.draw(ctx);
    }
    
    step() {
        this.sheen.move();
        // checkcollision
    }
}

export default Game;