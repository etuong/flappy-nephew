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
        const img = new Image();
        img.src = "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1523329078/Flappy%20Sheen/ezgif.com-resize.gif"
        ctx.beginPath();
        ctx.arc(this.x, this.y, 20, 0, 2 * Math.PI, true);

        ctx.strokeStyle = "green";
        // ctx.lineWidth = 5;
        ctx.stroke();
        // ctx.fillStyle = "blue";
        ctx.fillStyle = img;
        ctx.fill();

        // ctx.drawImage(img, 100, 100);
    }


    hitGround() {
        return (this.y === this.game_height);
    }

    move() {
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