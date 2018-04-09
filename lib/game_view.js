class GameView {
    constructor(game, ctx) {
        this.ctx = ctx;
        this.game = game;

        this.animate = this.animate.bind(this);
    }

    animate() {
        // const timeDelta = time - this.lastTime;
        this.game.step();
        this.game.draw(this.ctx);
        // this.lastTime = time;
        // requestAnimationFrame(this.animate());
    }

    bindKeyHandlers() {
        key("space", () => { this.game.sheen.up() })
    }

    start() {
        this.bindKeyHandlers();
        // this.lastTime = 0;
        setInterval(this.animate, 20);
        // requestAnimationFrame(this.animate());
    }
}

export default GameView;