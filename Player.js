var playerModel = canvas.getContext("2d");
let keysPressed = {};

var x = canvas.width / 2;
var y = canvas.height / 2;

var changeX = canvas.width / 2;
var changeY = canvas.height / 2;

var speedDiagX = playerSpeedX / Math.sqrt(2, 2);
var speedDiagY = playerSpeedY / Math.sqrt(2, 2);


function renderPlayer() {
    x = changeX;
    y = changeY;  
    rotatePlayer();
}

function movePlayer() {

    var speedX;
    var speedY;

    if (keysPressed[87] && keysPressed[65] && !keysPressed[68]
        || keysPressed[87] && keysPressed[68] && !keysPressed[65]
        || keysPressed[83] && keysPressed[65] && !keysPressed[68]
        || keysPressed[83] && keysPressed[68] && !keysPressed[65]) {
        speedX = speedDiagX;
        speedY = speedDiagY;
    }
    else {
        speedX = playerSpeedX;
        speedY = playerSpeedY;
    }
    if (keysPressed[65]) {
        if (changeX > speedX) {
            changeX -= speedX;
           
        }
        else {
            changeX = 0;
        }
    }
    if (keysPressed[87]) {
        if (changeY > speedY) {
            changeY -= speedY;
        }
        else {
            changeY = 0;
        }
    }
    if (keysPressed[68]) {
        if (changeX < canvas.width - speedX - playerWidth) {
            changeX += speedX;
        }
        else {
            changeX = canvas.width - playerWidth;
        }
    }
    if (keysPressed[83]) {
        if (changeY < (canvas.height - speedY - playerHigh)) {
            changeY += speedY;
        }
        else {
            changeY = canvas.height - playerHigh;
        }
    }
}

function rotatePlayer(){

    var angle =Math.atan((mouseY-changeY)/(mouseX-changeX))*180/Math.PI-90;
    if(changeX<mouseX){
      angle+=180;
    }
 
    context.save();
    context.translate(changeX+playerWidth/2, changeY+playerHigh/2);    
    context.rotate(angle * Math.PI / 180);
    
    playerModel.drawImage(playerImage,-playerWidth/2,-playerHigh/2,playerWidth,playerHigh);
    context.restore();
}
