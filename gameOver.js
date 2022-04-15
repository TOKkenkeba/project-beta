let gameOverScreen = canvas.getContext("2d");
let gameOverScreenX = canvas.width/3;
let gameOverScreenY= canvas.height/4;
let gameOverScreenWidth = canvas.width/3;
let gameOverScreenHigh=canvas.height/3;



let restart = canvas.getContext("2d");
let restartX =gameOverScreenX + gameOverScreenWidth/3;
let restartY = gameOverScreenY + gameOverScreenHigh/2;
let restartWidth =gameOverScreenWidth/3;
let restartHigh=gameOverScreenHigh/4 ;

function gameOver(){
    
    gameOverStage=true;
    gameOverScreen.fillStyle = "rgba(128,128,128, 1)";
    gameOverScreen.fillRect(gameOverScreenX,gameOverScreenY,gameOverScreenWidth,gameOverScreenHigh);
    scoreboard.font = "60px ariel";
    scoreboard.fillStyle = "rgba(255, 255, 255, 0.5)";
    let txt="Game Over !"
    gameOverScreen.fillText(txt,gameOverScreenX+(gameOverScreenWidth-gameOverScreen.measureText(txt).width)/2,gameOverScreenY+gameOverScreenHigh*30/100);
    scoreboard.font = "30px ariel";
    txt = `Your score is ${score}`;
    gameOverScreen.fillText(txt,gameOverScreenX+(gameOverScreenWidth-gameOverScreen.measureText(txt).width)/2,gameOverScreenY+gameOverScreenHigh*43/100);

    restart.fillStyle = "rgba(255, 255, 255, 0.1)";
    restart.fillRect(restartX,restartY,restartWidth,restartHigh);
    scoreboard.fillStyle = "rgba(50, 50, 50, 0.5)";
    scoreboard.font = "60px ariel";
    txt = "Restart";
    gameOverScreen.fillText(txt,restartX+(restartWidth-restart.measureText(txt).width)/2,restartY+restartHigh*70/100);
    
}

function restartGame(){
    gameOverStage=false;
    location.reload();
}