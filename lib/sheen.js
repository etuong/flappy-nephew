class Sheen {
    constructor() {
        // this.y = height/2;
        // this.x;
    }

    hi() {
        console.log("hi")
    }
    show(ctx) {
        ctx.beginPath();
        ctx.arc(100, 300, 20, 0, 2*Math.PI, true);
        ctx.strokeStyle = "green";
        ctx.lineWidth = 5;
        ctx.stroke();
        ctx.fillStyle = "blue";
        ctx.fill();
    }
};

export default Sheen;