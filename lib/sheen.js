class Sheen {
    constructor(canvasHeight) {
        this.canvasHeight = canvasHeight;

        // Perfect starting place of a circle is:
        // y = this.canvasHeight / 2
        // x = 200
        // Since we are using a rectangular image in its place, and the placement of the image starts at its upper left corner, we adjust these numbers so that the center of the image is at approx. y = this.canvasHeight / 2 and x = 200
        // Image size is 80h x 67w
        this.y = (this.canvasHeight / 2) - 40;
        this.x = 200 - 33.5;
        this.width = 67;
        this.height = 80;
        this.gravity = 0.7;
        this.lift = -15;
        this.velocity = 0;
        this.img = new Image();
        this.img.src = "http://res.cloudinary.com/dcf4iyb6t/image/upload/c_scale,w_67/v1523391031/Flappy%20Sheen/imageedit_14_6478900443.png";
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y);
    }


    hitGround() {
        return (this.y === this.canvasHeight);
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