class GameView {
    constructor(game, ctx) {
        this.ctx = ctx;
        this.game = game;

        this.animate = this.animate.bind(this);
    }

    animate(time) {
        this.game.step();
        this.game.draw(this.ctx);
        requestAnimationFrame(this.animate());
    }

    start() {
        requestAnimationFrame(this.animate());
    }
}

export default GameView;