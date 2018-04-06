class Sheen {
    constructor() {
        this.height = 640;

        this.y = this.height / 2;
        this.x = 200;

        this.gravity = 1;
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

    // NORMAL_FRAME_TIME_DELTA = 1000 / 60;
    // GRAVITY = 1;

    move() {
        this.velocity += this.gravity;
        this.y += this.velocity;

        // keeps sheen from falling off screen. May want to move these to another function
        if (this.y > this.height) {
            this.y = this.height;
            this.velocity = 0;
        }

        // keeps sheen from flying too high
        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }
    }
};

export default Sheen;