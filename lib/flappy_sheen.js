import Sheen from "./sheen";
import Game from "./game";
import GameView from "./game_view";

document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("myCanvas");
    canvasEl.width = 480;
    canvasEl.height = 640;

    const ctx = canvasEl.getContext("2d");
    const game = new Game();
    new GameView(game, ctx).start();

    // ctx.fillStyle = "black";
    // ctx.fillRect(0, 0, 480, 640);


});