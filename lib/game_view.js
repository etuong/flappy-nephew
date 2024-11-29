import { startGame } from "./flappy_sheen.js";

class GameView {
    constructor(game, ctx, properties) {
        this.ctx = ctx;
        this.game = game;
        this.properties = properties;

        this.animate = this.animate.bind(this);
        this.animation = () => {
            this.interval = setInterval(this.animate, 20);
            return this.interval;
        }
    }

    animate() {
        this.game.step();
        this.game.draw(this.ctx);

        if (!this.game.started) {
            clearInterval(this.interval);
        }

        if (this.game.ended) {
            clearInterval(this.interval);
            this.bindKeyToRestart();
        }
    }

    bindKeyToRestart() {
        key("space", () => {
            key.unbind("space");
            setTimeout(() => startGame(this.properties));
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

    start() {
        this.bindKeyToStart();
        this.animation();
    }
}

export default GameView;