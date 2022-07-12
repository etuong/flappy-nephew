import Game from "./game";
import GameView from "./game_view";

document.addEventListener("DOMContentLoaded", () => {
    startGame(0);
});

export const startGame = (lastScore) => {
    const canvasEl = document.getElementById("myCanvas");

    // Full screen
    canvasEl.width = window.innerWidth;
    canvasEl.height = window.innerHeight;

    const ctx = canvasEl.getContext("2d");
    const game = new Game(canvasEl.width, canvasEl.height);
    
    new GameView(game, ctx).start();
}
