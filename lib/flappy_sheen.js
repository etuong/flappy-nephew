import Sheen from "./sheen";
import Game from "./game";
import GameView from "./game_view";

document.addEventListener("DOMContentLoaded", () => {
    startGame();
});

export const startGame = () => {
    const canvasEl = document.getElementById("myCanvas");
    canvasEl.width = 480;
    canvasEl.height = 640;

    const ctx = canvasEl.getContext("2d");
    const game = new Game(canvasEl.width, canvasEl.height);
    new GameView(game, ctx).start();
}

// export const clearCanvas = () =
