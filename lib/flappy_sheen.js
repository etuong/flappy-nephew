import Game from "./game";
import GameView from "./game_view";

// Fires when the HTML document has been completely parsed
document.addEventListener("DOMContentLoaded", () => {
    if (window.history.replaceState) {
        window.history.replaceState(null, null, window.location.href);
    }

    window.onload = function () {
        const form = document.getElementById("myForm");
        const pristine = new Pristine(form);

        // When submit button is clicked, validate first
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const valid = pristine.validate();
            if (valid) {
                // Hide the setting menu screen so we can display the game canvas
                document.getElementById("main-container").style.display = "none";
                
                const nephew = form["nephew"].value;
                const pipeWidth = Number(form["pipeWidth"].value);
                const minPipeHeight = Number(form["minPipeHeight"].value);
                const maxPipeHeight = Number(form["maxPipeHeight"].value);
                const minSpaceHeight = Number(form["minSpaceHeight"].value);
                const maxSpaceHeight = Number(form["maxSpaceHeight"].value);
                const gravity = Number(form["gravity"].value);
                const lift = Number(form["lift"].value);
                const speed = Number(form["speed"].value);
                const flyWithHeart = form["flyWithHeart"].checked;

                const properties = { nephew, pipeWidth, minPipeHeight, maxPipeHeight, minSpaceHeight, maxSpaceHeight, gravity, lift, speed, flyWithHeart }
                startGame(properties);
            }
        });
    };
});

export const startGame = (properties) => {
    const canvas = document.getElementById("gameCanvas");
    canvas.style.display = "block";

    // Full screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    properties.canvasWidth = canvas.width;
    properties.canvasHeight = canvas.height;

    const ctx = canvas.getContext("2d");
    const game = new Game(ctx, properties);

    new GameView(game, ctx, properties).start();
}
