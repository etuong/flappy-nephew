class GameView {
    constructor(game, ctx) {
        this.ctx = ctx;
        this.game = game;

        
        this.animate = this.animate.bind(this);
        this.animation = setInterval(this.animate, 20);
    }

    animate() {
        this.game.step();
        this.game.draw(this.ctx);

        if (this.game.ended) {
            clearInterval(this.animation);
        }
        // requestAnimationFrame(this.animate());
    }

    bindKeyHandlers() {
        key("space", () => { this.game.sheen.up() })
    }

    start() {
        this.bindKeyHandlers();
        this.animation;
        // requestAnimationFrame(this.animate());
    }
}

export default GameView;