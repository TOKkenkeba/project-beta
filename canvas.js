let mouseX;
let mouseY;

const context = canvas.getContext('2d');
let gameOverStage=false;
let shot;


document.addEventListener('keydown', (event) => {
    keysPressed[event.keyCode] = true;
});
document.addEventListener('keyup', (event) => {
    delete keysPressed[event.keyCode];
});

document.addEventListener("mousemove", (event) => {
    mouseX = event.pageX;
    mouseY = event.pageY;

});
let click=true;

document.addEventListener("mousedown", (event)=>{
  
    if(event.which==1){
        clearInterval(shot);
        shot = setInterval(() => {
            bullet(bullHeight, bullWidth, changeX, changeY, mouseX, mouseY)
        }, bullSpeed * 50);
        click=false;
    }
 

});

document.addEventListener('visibilitychange', function() {
	if(document.hidden) {

        gameOverStage==false;
        keysPressed ={};
        clearInterval(intervalEnemyShot);
        clearInterval(intervalEnemyShot);
        clearInterval(intervalEnemyShot);
        clearInterval(intervalEnemyShot);
        clearInterval(intervalEnemyShot);
    }
    
	else{
      gameOverStage==true;
      intervalEnemyShot = setInterval(() => bulletEnemy(), enemyBulletSpeed);
    }
});

document.addEventListener("click", (event) => {
   if(click){
    bullet(bullHeight, bullWidth, changeX, changeY, mouseX, mouseY);
    if(gameOverStage==true && event.pageX > restartX && event.pageX<restartX+restartWidth && event.pageY>restartY&&event.pageY<restartY+restartHeight){
        restartGame();
    }
   }

});


document.addEventListener("mouseup", (event) => {

    clearInterval(shot);
    click=true;

});

init();
function init() {
  
    setTimeout(() =>  window.requestAnimationFrame(animate), 10);
       
    
   

}
document.addEventListener('contextmenu', event => event.preventDefault());

function animate() {
    
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(mainBackground,0,0, canvas.width, canvas.height);
    movePlayer();
    renderPlayer();
    renderBullets();
    renderBulletsEnemy();
    enemyMove(enemyConteiner);
    renederItemBar();  
    renderScoreBoard();
    xpBarRender(); 
    skillsCheck();
    xpBarRenderFill();
    renderHpBar(); 
    if(gameOverStage==false){
    window.requestAnimationFrame(animate);
    }
 
}




