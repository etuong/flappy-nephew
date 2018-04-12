class GameView {
    constructor(game, ctx) {
        this.ctx = ctx;
        this.game = game;
        
        this.animate = this.animate.bind(this);
        // this.animation = setInterval(this.animate, 20);
        this.animation = () => {
            this.interval = setInterval(this.animate, 20);
            return this.interval;
        }
    }

    animate() {
        this.game.step();
        this.game.draw(this.ctx);

        if (!this.game.started) {
            clearInterval(this.interval)
        }

        if (this.game.ended) {
            clearInterval(this.interval);
        }
        // requestAnimationFrame(this.animate());
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
        // setInterval(this.animate, 20);
        this.animation();
        // requestAnimationFrame(this.animate());
    }
}

export default GameView;