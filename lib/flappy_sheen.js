import Sheen from "./sheen";

document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("myCanvas");
    canvasEl.width = 480;
    canvasEl.height = 640;

    const ctx = canvasEl.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 480, 640);

   var sheen = new Sheen();
   sheen.hi();
   sheen.show(ctx);
  
});