class Sheen {
    constructor(ctx, properties) {
        this.ctx = ctx;

        this.canvasHeight = properties.canvasHeight;

        // Initial position
        this.y = (this.canvasHeight / 2);
        this.x = 200;

        // Size
        this.width = 67;
        this.height = 80;

        // Physics
        this.gravity = properties.gravity;
        this.lift = -(properties.lift);
        this.velocity = 0;

        // Sheen image
        this.img = new Image();
        this.img.src = `assets/images/${properties.nephew}.png`;

        // Heart image
        if (properties.flyWithHeart) {
            this.heart = new Image();
            this.heart.src = "assets/images/heart.png";
        }

        // Get audio for flying and dying
        this.flyAudio = document.getElementById("flyAudio");
        this.dieAudio = document.getElementById("dieAudio");
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y);
    }

    hitGround() {
        const flag = this.y === this.canvasHeight;
        if (flag) {
            this.dieAudio.play();
        }
        return flag;
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
        this.flyAudio.cloneNode(true).play();

        if (this.heart) {
            const timer = setInterval(() => { this.ctx.drawImage(this.heart, this.x, this.y); }, 10)
            setTimeout(() => clearInterval(timer), 200);
        }
    }
};

export default Sheen;