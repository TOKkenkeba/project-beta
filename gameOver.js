let gameOverScreen = canvas.getContext("2d");
let gameOverScreenX = canvas.width/3;
let gameOverScreenY= canvas.height/4;
let gameOverScreenWidth = canvas.width/3;
let gameOverScreenHeight=canvas.height/3;



let restart = canvas.getContext("2d");
let restartX =gameOverScreenX + gameOverScreenWidth/3;
let restartY = gameOverScreenY + gameOverScreenHeight/2;
let restartWidth =gameOverScreenWidth/3;
let restartHeight=gameOverScreenHeight/4 ;

function gameOver(){
   
    clearInterval(intervalEnemyShot);
    clearInterval(intervalEnemyShot);
    clearInterval(intervalEnemyShot);
    clearInterval(intervalEnemyShot);

    gameOverStage=true;
    gameOverScreen.fillStyle = "rgba(128,128,128, 1)";
    gameOverScreen.fillRect(gameOverScreenX,gameOverScreenY,gameOverScreenWidth,gameOverScreenHeight);
    scoreboard.font = "60px ariel";
    scoreboard.fillStyle = "rgba(255, 255, 255, 0.5)";
    let txt="Game Over !"
    gameOverScreen.fillText(txt,gameOverScreenX+(gameOverScreenWidth-gameOverScreen.measureText(txt).width)/2,gameOverScreenY+gameOverScreenHeight*30/100);
    scoreboard.font = "30px ariel";
    txt = `Your score is ${score}`;
    gameOverScreen.fillText(txt,gameOverScreenX+(gameOverScreenWidth-gameOverScreen.measureText(txt).width)/2,gameOverScreenY+gameOverScreenHeight*43/100);

    restart.fillStyle = "rgba(255, 255, 255, 0.1)";
    restart.fillRect(restartX,restartY,restartWidth,restartHeight);
    scoreboard.fillStyle = "rgba(50, 50, 50, 0.5)";
    scoreboard.font = "60px ariel";
    txt = "Restart";
    gameOverScreen.fillText(txt,restartX+(restartWidth-restart.measureText(txt).width)/2,restartY+restartHeight*70/100);
    
}

function restartGame(){
    clearInterval(intervalEnemyShot);
    clearInterval(intervalEnemyShot);
    clearInterval(intervalEnemyShot);
    clearInterval(intervalEnemyShot);
    gameOverStage=false;
    location.reload();
}