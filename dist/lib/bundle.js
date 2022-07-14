!function(t){var e={};function i(s){if(e[s])return e[s].exports;var h=e[s]={i:s,l:!1,exports:{}};return t[s].call(h.exports,h,h.exports,i),h.l=!0,h.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:s})},i.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);var s=class{constructor(t){this.canvasHeight=t.canvasHeight,this.y=this.canvasHeight/2,this.x=200,this.width=67,this.height=80,this.gravity=t.gravity,this.lift=-t.lift,this.velocity=0,this.img=new Image,this.img.src=`assets/${t.nephew}.png`,this.flyAudio=document.getElementById("flyAudio"),this.dieAudio=document.getElementById("dieAudio")}draw(t){t.drawImage(this.img,this.x,this.y)}hitGround(){const t=this.y===this.canvasHeight;return t&&this.dieAudio.play(),t}move(){this.velocity+=this.gravity,this.velocity*=.9,this.y+=this.velocity,this.stayInFrame(),this.stopAtBottom()}stayInFrame(){this.y>this.canvasHeight&&(this.y=this.canvasHeight,this.velocity=0)}stopAtBottom(){this.y<0&&(this.y=0,this.velocity=0)}up(){this.velocity+=this.lift,this.flyAudio.cloneNode(!0).play()}};var h=class{constructor(t){this.canvasHeight=t.canvasHeight,this.x=t.canvasWidth,this.width=t.pipeWidth,this.minPipeHeight=t.minPipeHeight,this.maxPipeHeight=t.maxPipeHeight,this.minSpaceHeight=t.minSpaceHeight,this.maxSpaceHeight=t.maxSpaceHeight,this.topPipeHeight=this.getRandomInt(this.minPipeHeight,this.maxPipeHeight+1),this.bottomPipeHeight=this.calculateBottomPipe(),this.speed=t.speed,this.scored=!1,this.hitAudio=document.getElementById("hitAudio")}calculateBottomPipe(){const t=this.getSpaceHeight();return this.canvasHeight-this.topPipeHeight-t}draw(t){let e=t.createLinearGradient(this.x,0,this.x+this.width,0);e.addColorStop(0,"#33cc33"),e.addColorStop(1,"#99ff99"),t.lineWidth=3,t.strokeStyle="black",t.strokeRect(this.x,0,this.width,this.topPipeHeight-20),t.fillStyle=e,t.fillRect(this.x,0,this.width,this.topPipeHeight-20),t.strokeRect(this.x-5,this.topPipeHeight-20,this.width+10,20),t.fillRect(this.x-5,this.topPipeHeight-20,this.width+10,20),t.strokeRect(this.x,this.canvasHeight-(this.bottomPipeHeight-20),this.width,this.bottomPipeHeight),t.fillRect(this.x,this.canvasHeight-(this.bottomPipeHeight-20),this.width,this.bottomPipeHeight),t.strokeRect(this.x-5,this.canvasHeight-this.bottomPipeHeight,this.width+10,20),t.fillRect(this.x-5,this.canvasHeight-this.bottomPipeHeight,this.width+10,20)}getRandomInt(t,e){return Math.floor(Math.random()*(e-t))+t}getSpaceHeight(){const t=this.canvasHeight-this.topPipeHeight-this.minPipeHeight;return t>this.maxSpaceHeight?this.getRandomInt(this.minSpaceHeight,this.maxSpaceHeight+1):this.getRandomInt(this.minSpaceHeight,t)}hit(t){const e=this.inRangeHor(t)&&this.inRangeVer(t);return e&&this.hitAudio&&(this.hitAudio.play(),this.hitAudio=null),e}inRangeHor(t){return t.x>this.x&&t.x<this.x+this.width||t.x+t.width>this.x&&t.x+t.width<this.x+this.width}inRangeVer(t){return t.y<this.topPipeHeight||t.y+t.height>this.canvasHeight-this.bottomPipeHeight}isOffScreen(){return this.x<-this.width}move(){this.x-=this.speed}};var a=class{constructor(t){this.properties=t,this.width=t.canvasWidth,this.height=t.canvasHeight,this.sheen=new s(t),this.pipes=[new h(t)],this.frameCount=0,this.movePipe=!0,this.started=!1,this.ended=!1,this.score=0,this.img=new Image,this.img.src="assets/background.jpg"}checkCollision(){this.pipes.forEach(t=>{t.hit(this.sheen)&&(key.unbind("space"),this.movePipe=!1)})}draw(t){this.frameCount++,this.img.onload=(()=>{this.drawFrame(t)}),this.drawFrame(t)}drawEndScreen(t){t.lineWidth=3,t.strokeRect(192,236,96,110),t.fillStyle="#ffe6b3",t.fillRect(192,236,96,110),t.font="13px 'Press Start 2P",t.fillStyle="#ff6600",t.textAlign="center",t.fillText("SCORE",240,280),t.font="24px 'Press Start 2P",t.fillStyle="white",t.textAlign="center",t.strokeText(this.score,240,320),t.fillText(this.score,240,320),t.lineWidth=10,t.strokeStyle="white",t.strokeRect(86,364,508,50),t.fillStyle="#ff6600",t.fillRect(86,364,508,50),t.font="12px 'Press Start 2P'",t.save(),t.shadowColor="black",t.fillStyle="white",t.textAlign="center",t.fillText("PRESS SPACEBAR TO RESTART OR REFRESH PAGE TO CHANGE SETTINGS",340,395),t.restore()}drawFrame(t){t.drawImage(this.img,0,0),this.frameCount%110==0&&this.pipes.push(new h(this.properties)),this.drawPipes(t),this.removeOffscreenPipes(),this.sheen.draw(t),this.sheen.hitGround()&&(this.ended=!0,this.drawEndScreen(t)),this.drawScore(t),this.started||this.drawStartScreen(t)}drawPipes(t){this.pipes.forEach(e=>e.draw(t))}drawScore(t){this.ended||(t.font="40px 'Press Start 2P'",t.fillStyle="white",t.textAlign="center",t.strokeText(this.score,240,130),t.fillText(this.score,240,130))}drawStartScreen(t){t.lineWidth=10,t.strokeStyle="white",t.strokeRect(96,213,488,50),t.fillStyle="#ff6600",t.fillRect(96,213,488,50),t.font="12px 'Press Start 2P'",t.save(),t.shadowColor="black",t.fillStyle="white",t.textAlign="center",t.fillText("PRESS SPACEBAR TO START OR REFRESH PAGE TO CHANGE SETTINGS",340,245),t.restore()}removeOffscreenPipes(){let t=this.pipes.filter(t=>!t.isOffScreen());this.pipes=t}step(){this.sheen.move(),this.movePipe&&this.pipes.forEach(t=>{t.move()}),this.checkCollision(),this.updateScore()}updateScore(){this.pipes.forEach(t=>{!t.scored&&this.sheen.x>t.x+t.width&&(t.scored=!0,this.score++)})}};var n=class{constructor(t,e,i){this.ctx=e,this.game=t,this.properties=i,this.animate=this.animate.bind(this),this.animation=(()=>(this.interval=setInterval(this.animate,20),this.interval))}animate(){this.game.step(),this.game.draw(this.ctx),this.game.started||clearInterval(this.interval),this.game.ended&&(clearInterval(this.interval),this.bindKeyToRestart())}bindKeyToRestart(){key("space",()=>{key.unbind("space"),setTimeout(()=>r(this.properties))})}bindKeyToStart(){key("space",()=>{key.unbind("space"),this.bindKeyToFly(),this.animation(),this.game.started=!0})}bindKeyToFly(){key("space",()=>{this.game.sheen.up()})}start(){this.bindKeyToStart(),this.animation()}};i.d(e,"startGame",function(){return r}),document.addEventListener("DOMContentLoaded",()=>{var t;window.history.replaceState&&window.history.replaceState(null,null,window.location.href),window.onload=function(){var e=document.getElementById("myForm");t=new Pristine(e),e.addEventListener("submit",function(i){if(i.preventDefault(),t.validate()){document.getElementById("form-container").style.display="none";const t=e.nephew.value,i=Number(e.pipeWidth.value),s=Number(e.minPipeHeight.value),h=Number(e.maxPipeHeight.value),a=Number(e.minSpaceHeight.value),n=Number(e.maxSpaceHeight.value),o=Number(e.gravity.value),c=Number(e.lift.value),l=Number(e.speed.value);r({nephew:t,pipeWidth:i,minPipeHeight:s,maxPipeHeight:h,minSpaceHeight:a,maxSpaceHeight:n,gravity:o,lift:c,speed:l})}})}});const r=t=>{const e=document.getElementById("myCanvas");e.style.display="block",e.width=window.innerWidth,e.height=window.innerHeight,t.canvasWidth=e.width,t.canvasHeight=e.height;const i=e.getContext("2d"),s=new a(t);new n(s,i,t).start()}}]);
//# sourceMappingURL=bundle.js.map