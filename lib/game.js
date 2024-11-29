import Sheen from "./sheen.js";
import Pipe from "./pipe.js";

class Game {
    constructor(ctx, properties) {
        this.properties = properties;

        // Canvas size
        this.width = properties.canvasWidth;
        this.height = properties.canvasHeight;

        this.sheen = new Sheen(ctx, properties);
        this.pipes = [new Pipe(properties)];
        this.frameCount = 0;
        this.movePipe = true;
        this.started = false;
        this.ended = false;
        this.score = 0;

        this.img = new Image();
        this.img.src = "assets/images/background.jpg";
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
        this.frameCount++;
        this.img.onload = () => {
            this.drawFrame(ctx);
        }
        this.drawFrame(ctx);
    }

    drawEndScreen(ctx) {
        // Score Box
        ctx.lineWidth = 3;
        ctx.strokeRect(192, 236, 96, 110);
        ctx.fillStyle = "#ffe6b3";
        ctx.fillRect(192, 236, 96, 110);

        // Score box text
        ctx.font = "13px 'Press Start 2P";
        ctx.fillStyle = "#ff6600";
        ctx.textAlign = "center";
        ctx.fillText("SCORE", 240, 280);
        ctx.font = "24px 'Press Start 2P";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.strokeText(this.score, 240, 320);
        ctx.fillText(this.score, 240, 320);

        ctx.lineWidth = 10;
        ctx.strokeStyle = "white";
        ctx.strokeRect(86, 364, 508, 50);
        ctx.fillStyle = "#ff6600";
        ctx.fillRect(86, 364, 508, 50);

        ctx.font = "12px 'Press Start 2P'"
        ctx.save();
        ctx.shadowColor = "black";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("PRESS SPACEBAR TO RESTART OR REFRESH PAGE TO CHANGE SETTINGS", 340, 395);
        ctx.restore();
    }

    drawFrame(ctx) {
        ctx.drawImage(this.img, 0, 0);

        if (this.frameCount % 110 == 0) {
            this.pipes.push(new Pipe(this.properties))
        }

        this.drawPipes(ctx);
        this.removeOffscreenPipes();
        this.sheen.draw(ctx);

        if (this.sheen.hitGround()) {
            this.ended = true;
            this.drawEndScreen(ctx)
        }

        this.drawScore(ctx);

        if (!this.started) {
            this.drawStartScreen(ctx);
        }
    }

    drawPipes(ctx) {
        this.pipes.forEach(pipe => pipe.draw(ctx))
    }

    drawScore(ctx) {
        if (!this.ended) {
            ctx.font = "40px 'Press Start 2P'";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.strokeText(this.score, 240, 130);
            ctx.fillText(this.score, 240, 130);
        }
    }

    drawStartScreen(ctx) {
        ctx.lineWidth = 10;
        ctx.strokeStyle = "white";
        ctx.strokeRect(96, 213, 488, 50);
        ctx.fillStyle = "#ff6600";
        ctx.fillRect(96, 213, 488, 50);

        ctx.font = "12px 'Press Start 2P'";
        ctx.save();
        ctx.shadowColor = "black";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("PRESS SPACEBAR TO START OR REFRESH PAGE TO CHANGE SETTINGS", 340, 245);
        ctx.restore();
    }

    removeOffscreenPipes() {
        let onScreenPipes = this.pipes.filter(pipe => !pipe.isOffScreen());
        this.pipes = onScreenPipes;
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
                this.score++;
            }
        })
    }
}

export default Game;