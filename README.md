# Flappy Sheen

[Live Site](https://traciechang.github.io/flappy-sheen/)

![alt text](http://res.cloudinary.com/dcf4iyb6t/image/upload/v1524097296/flappy-sheen.gif)

A Flappy Bird clone built with Javascript and HTML5 Canvas.

### How to Play
Pusheen needs your help navigating through treacherous pipes. Tap your spacebar to keep this tubby kitty in the air and fly her as far as you can without hitting a pipe. 

### Game Features
* `Pipes` are randomly generated. Pusheen may need to ascend at one moment and take a nosedive the next.
* Openings between pipes are unpredictable and can be spacious, narrow, or everything in between.
* One point is rewarded for every set of pipes that Pusheen successfully passes through.

### Code Spotlight
**The Pipe-Generating Algorithm**

![alt text](http://res.cloudinary.com/dcf4iyb6t/image/upload/c_scale,w_532/v1524170777/Flappy%20Sheen/drawFrame.png)
![alt text](http://res.cloudinary.com/dcf4iyb6t/image/upload/c_scale,w_597/v1524171091/Flappy%20Sheen/removeOffscreenPipes.png)
* Pairs of pipes are continuously added every 110 frames. This allows the game to go on infinitely, and the process terminates only if Pusheen hits a pipe or `hitGround`.

* Pipes are managed by an array. Because there is no limit to how far a player can go, this array can potentially become extremely large. To prevent memory leaks and keep the game running smoothly, a pipe that `isOffScreen` is removed from the array. Any issues that may arise from altering an array are avoided by setting `this.pipes` to a new array containing only `onScreenPipes`. Thus, a maximum of two pipes are ever in the array at one time.

![alt text](http://res.cloudinary.com/dcf4iyb6t/image/upload/c_scale,w_710/v1524180020/Flappy%20Sheen/calculateBottomPipe.png)
![alt text](http://res.cloudinary.com/dcf4iyb6t/image/upload/c_scale,w_659/v1524179147/Flappy%20Sheen/getSpaceHeight.png)
* The height of the pipes and the space between each pair of pipes are randomly generated. 

* Both have a set minimum and maximum height. A random height is first generated for the top pipe. Next, the `maxSpaceAvailable` is determined in order to generate a random `spaceHeight`. It will then `calculateBottomPipe` by subtracting `this.topPipeHeight` and `spaceHeight` from `this.canvasHeight`.

### ToDo
* Increase game difficulty by adding pipes more frequently and increasing pipe speed as players reach certain scores.
* Add a Best Score.
* Animate Pusheen with flapping wings.
