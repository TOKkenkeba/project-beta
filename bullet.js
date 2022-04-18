let mag = [[]];
let indexPlayerMag = 0;
let bulletObject = canvas.getContext("2d");

function bullet(Height, width, x, y, pageX, pageY) {

    mag.push([]);

    let line = calculateDiagonal(x,y,pageX,pageY);;
    let angle = calculateAngle(mouseX,mouseY,changeX,changeY);
    let stepXY =calculateStepForBullet(x,y,pageX,pageY,line,bullSpeed);
    
    mag[indexPlayerMag].push(x + playerWidth / 2 - bullWidth / 2, y + playerHeight / 2 - bullHeight / 2, width, Height, 0, stepXY[0],stepXY[1], angle);
    indexPlayerMag++;
}

function calculateDiagonal(poinOneX,pointOneY,pointTwoX,pointTwoY){
    let line = Math.sqrt((pointTwoX - poinOneX) * (pointTwoX- poinOneX) + (pointTwoY- pointOneY) * (pointTwoY- pointOneY));
    return line;
}

function calculateAngle(poinOneX,pointOneY,pointTwoX,pointTwoY){
    let angle = Math.atan((pointOneY - pointTwoY) / (poinOneX - pointTwoX)) * 180 / Math.PI - 90;
    if (pointTwoX < poinOneX) {
        angle += 180;
    }
    return angle;
}

function calculateStepForBullet(poinOneX,pointOneY,pointTwoX,pointTwoY,line,bullSpeed){
    let stepXY=[];
    stepXY.push((pointTwoX - poinOneX) / line * bullSpeed);
    stepXY.push((pointTwoY - pointOneY) / line * bullSpeed);
    return stepXY;
}

function renderBullets() {

    moveBullet();
    for (let i = 0; i < mag.length; i++) {
        let item = mag[i];
        for (let j = 0; j < item.length; j++) {

            rotateBullet(item[0], item[1], item[7]);
         
        }
    }
}

function moveBullet() {
    for (let i = 0; i < mag.length; i++) {
        let item = mag[i];
        for (let j = 0; j < item.length; j++) {
            item[0] += item[5];
            item[1] += item[6];
        }
        if ((item[0] > canvas.width || item[0] < 0) && item[0] != undefined) {
            mag.splice(i, 1);
            indexPlayerMag = mag.length;
        }
        if ((item[1] > canvas.height || item[1] < 0) && item[1] != undefined) {
            mag.splice(i, 1);
            indexPlayerMag = mag.length;
        }

        hitEnemyWithhBullets(mag[i], i);
    }
}

function hitEnemyWithhBullets(item, bullet) {

    if (item != undefined) {

        for (let j = 0; j < enemyConteiner.length; j++) {

            if ((item[0] >= enemyConteiner[j][0] && item[0] <= enemyConteiner[j][0] + enemyConteiner[j][2] && item[1] >= enemyConteiner[j][1] && item[1] <= enemyConteiner[j][1] + enemyConteiner[j][3])
                || (item[0] + bullWidth >= enemyConteiner[j][0] && item[0] + bullWidth <= enemyConteiner[j][0] + enemyConteiner[j][2] && item[1] >= enemyConteiner[j][1] && item[1] <= enemyConteiner[j][1] + enemyConteiner[j][3])
                || (item[0] >= enemyConteiner[j][0] && item[0] <= enemyConteiner[j][0] + enemyConteiner[j][2] && item[1] + bullHeight >= enemyConteiner[j][1] && item[1] + bullHeight <= enemyConteiner[j][1] + enemyConteiner[j][3])
                || (item[0] + bullWidth >= enemyConteiner[j][0] && item[0] + bullWidth <= enemyConteiner[j][0] + enemyConteiner[j][2] && item[1] + bullHeight >= enemyConteiner[j][1] && item[1] + bullHeight <= enemyConteiner[j][1] + enemyConteiner[j][3])) {

                mag.splice(bullet, 1);
                indexPlayerMag = mag.length;
                enemyConteiner[j][4] -= bulletDmg;

                checkIfDead(enemyConteiner[j][4], j);
            }
        }
    }

}
function checkIfDead(enemyHp, enemy1) {
    if (enemyHp <= 0) {
        enemyConteiner = enemyConteiner.filter((enemy) => enemy !== enemyConteiner[enemy1]);
        enemyIndex = enemyConteiner.length;
        countScoreAndLevel();
        if (enemyConteiner.length == 0) {

            initLevel();

        }

    }
}

function rotateBullet(i, j, angle) {
    context.save();
    context.translate(i + bullWidth / 2, j + bullHeight / 2);
    context.rotate(angle * Math.PI / 180);
    bulletObject.drawImage(bulletImage, -bullWidth / 2, -bullHeight / 2, bullWidth, bullHeight);
    context.restore();
}


