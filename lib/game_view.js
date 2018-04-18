import { startGame } from "./flappy_sheen";
import Game from "./game";

class GameView {
    constructor(game, ctx) {
        this.ctx = ctx;
        this.game = game;
        
        this.animate = this.animate.bind(this);
        this.animation = () => {
            this.interval = setInterval(this.animate, 20);
            return this.interval;
        }
    }

    animate() {
        console.log("start animate")
        this.game.step();
        this.game.draw(this.ctx);

        if (!this.game.started) {
            // console.log("start clearinterval")
            // setTimeout(() => clearInterval(this.interval));
            // console.log("end clearinterval")
            clearInterval(this.interval);
        }

        if (this.game.ended) {
            clearInterval(this.interval);
            this.bindKeyToRestart();
        }
        console.log("end animate")
    }

    bindKeyToRestart() {
        key("space", () => {
            key.unbind("space");
            // location.reload();
           
            setTimeout(() => startGame(this.game.score), 0);
            // startGame();
        })
    }
    
    bindKeyToStart() {
        key("space", () => { 
            key.unbind("space");
            this.bindKeyToFly();
            this.animation();
            this.game.started = true;
        });
    }

    bindKeyToFly() {
        key("space", () => { this.game.sheen.up() })
    }

    clearCanvas() {
        const canvasEl = document.getElementById("myCanvas");
        const ctx = canvasEl.getContext("2d");
        ctx.clearRect(0, 0, 480, 640);
    }

    start() {
        this.bindKeyToStart();
        this.animation();
    }
}

export default GameView;