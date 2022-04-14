const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth - 4;
canvas.height = window.innerHeight - 6;

var mouseX;
var mouseY;

const context = canvas.getContext('2d');
var gameOverStage=false;
var shot;


document.addEventListener('keydown', (event) => {
    keysPressed[event.key] = true;
});
document.addEventListener('keyup', (event) => {
    delete keysPressed[event.key];
});

document.addEventListener("mousemove", (event) => {
    mouseX = event.pageX;
    mouseY = event.pageY;

});
var click=true;
document.addEventListener("mousedown", function () {

    shot = setInterval(() => {
        bullet(bullHigh, bullWidth, changeX, changeY, mouseX, mouseY)
    }, bullSpeed * 50);
    click=false;

});

document.addEventListener("click", (event) => {
   if(click){
    bullet(bullHigh, bullWidth, changeX, changeY, mouseX, mouseY);
    if(gameOverStage==true && event.pageX > restartX && event.pageX<restartX+restartWidth && event.pageY>restartY&&event.pageY<restartY+restartHigh){
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
  
        window.requestAnimationFrame(animate);
    
   

}

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(mainBackground,0,0, canvas.width, canvas.height);
    movePlayer();
    renderPlayer();
    renderBullets();
    enemyMove(enemyConteiner);
    renederItemBar();  
    renderScoreBoard();
    xpBarRender();  
    skillsCheck();
    xpBarRenderFill();
 
    if(gameOverStage==false){
    window.requestAnimationFrame(animate);
    }
 
}




