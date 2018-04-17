import Sheen from "./sheen";
import Game from "./game";
import GameView from "./game_view";

document.addEventListener("DOMContentLoaded", () => {
    // document.fonts.load('10pt "Press Start 2P"').then(startGame(0))
    startGame(0);
});

export const startGame = (lastScore) => {
    const canvasEl = document.getElementById("myCanvas");
    canvasEl.width = 480;
    canvasEl.height = 640;

    document.getElementById('last_score').innerHTML = lastScore;
    const ctx = canvasEl.getContext("2d");
    const game = new Game(canvasEl.width, canvasEl.height);
    new GameView(game, ctx).start();
}
