import Sheen from "./sheen";
import Pipe from "./pipe";

class Game {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.sheen = new Sheen(height);
        this.pipes = [new Pipe(width, height)];
        this.frameCount = 0;
        this.movePipe = true;
        this.started = false;
        this.ended = false;
        this.score = 0;
    }

    checkCollision() {
        this.pipes.forEach(pipe => {
            if (pipe.hit(this.sheen)) {
                key.unbind("space");
                this.movePipe = false;
            }
        })
    }

    draw(ctx) {
        console.log("drawing...")
        console.log(this.pipes.length)
        this.frameCount ++;

        const img = new Image();
        img.src = "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1523320487/Flappy%20Sheen/cloud_background.jpg";
        ctx.fillRect(0, 0, this.width, this.height);
        
        img.onload = () => {
            ctx.drawImage(img, 0, 0);

            if (this.frameCount % 110 == 0) {
                this.pipes.push(new Pipe(this.width, this.height))
            }

            for (let i = this.pipes.length - 1; i >= 0; i--) {
                this.pipes[i].draw(ctx);
                if (this.pipes[i].isOffscreen()) {
                    this.pipes.splice(i, 1);
                }
            }

            this.sheen.draw(ctx);

            ctx.font = "48px Comic Sans MS";
            ctx.fillStyle = "white";
            ctx.fillText(this.score, (this.width/2 - 30), 130);

            if (!this.started) {
                this.drawStart(ctx);
            }
        }

        if (this.sheen.hitGround()) {
            this.ended = true;
        }
    }
    
    // 480/5 =96, 640/3 = 213
    drawStart(ctx) {
        ctx.lineWidth = 5;
        ctx.strokeRect(95, 212, 290, 52);
        ctx.lineWidth = 10;
        ctx.strokeStyle = "white";
        ctx.strokeRect(96, 213, 288, 50);
        ctx.fillStyle = "#ff6600";
        ctx.fillRect(96, 213, 288, 50);

        ctx.font = "20px Comic Sans MS";
        ctx.fillStyle = "white";
        ctx.fillText("PRESS SPACEBAR TO START", 100, 240);
    }

    step() {
        this.sheen.move();

        if (this.movePipe) {
            this.pipes.forEach(pipe => {
                pipe.move();
            })
        }

        this.checkCollision();
        this.updateScore();
    }

    updateScore() {
        this.pipes.forEach(pipe => {
            if (!pipe.scored && (this.sheen.x > pipe.x + pipe.width)) {
                pipe.scored = true;
                this.score ++;
            }
        })
    }
}

export default Game;