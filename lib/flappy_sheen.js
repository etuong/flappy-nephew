import Game from "./game";
import GameView from "./game_view";

document.addEventListener("DOMContentLoaded", () => {
    if (window.history.replaceState) {
        window.history.replaceState(null, null, window.location.href);
    }
    var pristine;
    window.onload = function () {
        var form = document.getElementById("myForm");
        pristine = new Pristine(form);
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var valid = pristine.validate();
            if (valid) {
                document.getElementById("form-container").style.display = "none";
                const nephew = form["nephew"].value;
                const pipeWidth = Number(form["pipeWidth"].value);
                const minPipeHeight = Number(form["minPipeHeight"].value);
                const maxPipeHeight = Number(form["maxPipeHeight"].value);
                const minSpaceHeight = Number(form["minSpaceHeight"].value);
                const maxSpaceHeight = Number(form["maxSpaceHeight"].value);
                const gravity = Number(form["gravity"].value);
                const lift = Number(form["lift"].value);
                const speed = Number(form["speed"].value);

                const properties = { nephew, pipeWidth, minPipeHeight, maxPipeHeight, minSpaceHeight, maxSpaceHeight, gravity, lift, speed }
                startGame(properties);
            }
        });
    };
});

export const startGame = (properties) => {
    const canvasEl = document.getElementById("myCanvas");
    canvasEl.style.display = "block";

    // Full screen
    canvasEl.width = window.innerWidth;
    canvasEl.height = window.innerHeight;

    properties.canvasWidth = canvasEl.width;
    properties.canvasHeight = canvasEl.height;

    const ctx = canvasEl.getContext("2d");
    const game = new Game(properties);

    new GameView(game, ctx, properties).start();
}
