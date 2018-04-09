const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

class Sheen {
    constructor(game_height) {
        this.game_height = game_height;

        this.y = this.game_height / 2;
        this.x = 200;

        this.gravity = 0.7;
        this.lift = -15;
        this.velocity = 0;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 20, 0, 2 * Math.PI, true);
        ctx.strokeStyle = "green";
        ctx.lineWidth = 5;
        ctx.stroke();
        ctx.fillStyle = "blue";
        ctx.fill();
    }

    move() {
        // this.velocity += this.gravity;
        // let offSet = this.velocity * (timeDelta / NORMAL_FRAME_TIME_DELTA)
        // this.y += this.velocity + offSet;

        this.velocity += this.gravity;
        this.velocity *= 0.9;
        this.y += this.velocity;
        // keeps sheen from falling off screen. May want to move these to another function
        if (this.y > this.game_height) {
            this.y = this.game_height;
            this.velocity = 0;
        }

        // keeps sheen from flying too high
        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }
    }

    up() {
        this.velocity += this.lift;
    }
};

export default Sheen;