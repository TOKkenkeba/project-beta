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
 
    //playerModel.fillRect(changeX,changeY,playerWidth,playerHigh);
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
        speedX = playerSpeedX;
        speedY = playerSpeedY;
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
        if (changeX < canvas.width - speedX - playerWidth) {
            changeX += speedX;
        }
        else {
            changeX = canvas.width - playerWidth;
        }
    }
    if (keysPressed['s']) {
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
    console.log(angle);
    context.save();
    context.translate(changeX+playerWidth/2, changeY+playerHigh/2);    
    context.rotate(angle * Math.PI / 180);
    
    playerModel.drawImage(playerImage,-playerWidth/2,-playerHigh/2,playerWidth,playerHigh);
    context.restore();
}
