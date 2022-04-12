var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth-10;
canvas.height = window.innerHeight-10;

var mouseX;
var mouseY;

document.addEventListener('keydown', (event) => {
    keysPressed[event.key] = true;
});
document.addEventListener('keyup', (event) => {
    delete keysPressed[event.key];
});
const context = canvas.getContext('2d');

var shot;
document.addEventListener("mousemove", (event) => {
    mouseX = event.pageX;
    mouseY = event.pageY;

});
document.addEventListener("mousedown", function () {

    shot = setInterval(() => {
        bullet(bullHigh, bullWidth, changeX, changeY, mouseX, mouseY)
    }, bullSpeed * 100);

});

document.addEventListener("click", (event)=> {
    bullet(bullHigh, bullWidth, changeX, changeY, mouseX, mouseY);
});

document.addEventListener("mouseup", (event) => {

    clearInterval(shot);

});

init();
function init() {
    window.requestAnimationFrame(animate);
    
}

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    movePlayer();
    renderPlayer();
    renderEnemy();
    renderBullets();

    window.requestAnimationFrame(animate);
}




