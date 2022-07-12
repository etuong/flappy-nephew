class Sheen {
    constructor(canvasHeight) {
        this.canvasHeight = canvasHeight;

        // Initial position
        this.y = (this.canvasHeight / 2);
        this.x = 200;

        // Size
        this.width = 67;
        this.height = 80;

        // Physics
        this.gravity = 0.7;
        this.lift = -15;
        this.velocity = 0;

        // Sheen image
        this.img = new Image();
        this.img.src = "http://res.cloudinary.com/dcf4iyb6t/image/upload/c_scale,w_67/v1523391031/Flappy%20Sheen/imageedit_14_6478900443.png";
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y);
    }

    hitGround() {
        return this.y === this.canvasHeight;
    }

    move() {
        this.velocity += this.gravity;
        this.velocity *= 0.9;
        this.y += this.velocity;
        this.stayInFrame();
        this.stopAtBottom();
    }

    stayInFrame() {
        if (this.y > this.canvasHeight) {
            this.y = this.canvasHeight;
            this.velocity = 0;
        }
    }

    stopAtBottom() {
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