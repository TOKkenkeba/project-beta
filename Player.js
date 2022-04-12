var object = canvas.getContext("2d");
let keysPressed = {};

var x = canvas.width / 2;
var y = canvas.height / 2;

var changeX = canvas.width / 2;
var changeY = canvas.height / 2;

var speedDiagX = xSpeed / Math.sqrt(2, 2);
var speedDiagY = ySpeed / Math.sqrt(2, 2);

function renderPlayer(){
    x = changeX;
    y = changeY;
    object.fillStyle = "black";
    object.fillRect(changeX, changeY, objectWidth, objectHigh);
    
}

function movePlayer() {

    var speedX;
    var speedY;

    if (keysPressed['w'] && keysPressed['a'] && !keysPressed['d']
        || keysPressed['w'] && keysPressed['d'] && !keysPressed['a']
        || keysPressed['s'] && keysPressed['a'] && !keysPressed['d']
        || keysPressed['s'] && keysPressed['d'] && !keysPressed['a']) {
        speedX = speedDiagX;
        speedY = speedDiagY;
    }
    else {
        speedX = xSpeed;
        speedY = xSpeed;
    }
    if (keysPressed['a']) {
        if (changeX > speedX) {
            changeX -= speedX;
        }
        else {
            changeX = 0;
        }
    }
    if (keysPressed['w']) {
        if (changeY > speedY) {
            changeY -= speedY;
        }
        else {
            changeY = 0;
        }
    }
    if (keysPressed['d']) {
        if (changeX < canvas.width - speedX - objectWidth) {
            changeX += speedX;
        }
        else {
            changeX = canvas.width - objectWidth;
        }
    }
    if (keysPressed['s']) {
        if (changeY < (canvas.height - speedY - objectHigh)) {
            changeY += speedY;
        }
        else {
            changeY = canvas.height - objectHigh;
        }
    }
}
