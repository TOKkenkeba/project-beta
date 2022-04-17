let enemyMag = [];
let indexEnemyMag = 0;
let bulletObjectEnemy = canvas.getContext("2d");
let intervalEnemyShot = setInterval(() => bulletEnemy(), enemyBulletSpeed);
function bulletEnemy() {


    this.index = Math.round(Math.random(enemyConteiner.length - 1) * (enemyConteiner.length - 1));

    if (enemyConteiner[this.index][7] == enemyIndexCarry && enemyConteiner[enemyConteiner.length-1][7]!=enemyIndexBullEnemy) {
        deployEnemyFromCarry(this.index);
        console.log(enemyConteiner);
    }
    else {
        this.width = enemyConteiner[this.index][2];
        this.Height = enemyConteiner[this.index][3];
        this.x = enemyConteiner[this.index][0];
        this.y = enemyConteiner[this.index][1];
        this.pageX = x;
        this.pageY = y;
        enemyMag.push([]);

        this.line = calculateDiagonal(this.x, this.y, this.pageX, this.pageY);;
        this.angle = calculateAngle(x, y, this.x, this.y);
        this.stepXY = calculateStepForBullet(this.x, this.y, this.pageX, this.pageY, this.line, 3);

        enemyMag[indexEnemyMag].push(this.x + this.width / 2 - bullWidth / 2, this.y + this.Height / 2 - bullHeight / 2, bullWidth, bullHeight, indexEnemyMag, stepXY[0], stepXY[1], angle);
        indexEnemyMag++;
    }

}

function deployEnemyFromCarry(id) {
    enemyConteiner.push([]);
    enemyConteiner[enemyIndex].push(enemyConteiner[id][0], enemyConteiner[id][1] - enemyConteiner[id][3], enemyWidthBullEnemy, enemyHeightBullEnemy, enemyHpBullEnemy, enemySpeedXBullEnemy, enemySpeedYBullEnemy, enemyIndexBullEnemy);
    enemyIndex++
}


function renderBulletsEnemy() {

    moveBulletEnemy();
    for (let i = 0; i < enemyMag.length; i++) {
        let item = enemyMag[i];
        for (let j = 0; j < item.length; j++) {

            rotateBulletEnemy(item[0], item[1], item[7]);

        }
    }
}

function moveBulletEnemy() {
    for (let i = 0; i < enemyMag.length; i++) {
        let item = enemyMag[i];
        for (let j = 0; j < item.length; j++) {
            item[0] += item[5];
            item[1] += item[6];
        }
        if ((item[0] > canvas.width || item[0] < 0) && item[0] != undefined) {
            enemyMag.splice(i, 1);
            indexEnemyMag = enemyMag.length;
        }
        if ((item[1] > canvas.height || item[1] < 0) && item[1] != undefined) {
            enemyMag.splice(i, 1);
            indexEnemyMag = enemyMag.length;
        }

        hitPlayerWithhBullets(enemyMag[i], i)
    }
}

function hitPlayerWithhBullets(item, bullet) {

    if (item != undefined) {

        for (let j = 0; j < enemyMag.length; j++) {

            if ((item[0] >= x && item[0] <= x + playerWidth && item[1] >= y && item[1] <= y + playerHeight)
                || (item[0] + bullWidth >= x && item[0] + bullWidth <= x + playerWidth && item[1] >= y && item[1] <= y + playerHeight)
                || (item[0] >= x && item[0] <= x + playerWidth && item[1] + bullHeight >= y && item[1] + bullHeight <= y + playerHeight)
                || (item[0] + bullWidth >= x && item[0] + bullWidth <= x + playerWidth && item[1] + bullHeight >= y && item[1] + bullHeight <= y + playerHeight)) {

                enemyMag.splice(bullet, 1);
                indexEnemyMag = enemyMag.length;
                playerHP -= bulletDmg;

                checkIfPlayerDead();
            }
        }
    }

}

function checkIfPlayerDead() {
    if (playerHP <= 0) {
        clearInterval(intervalEnemyShot);
        gameOver();

    }
}


function rotateBulletEnemy(i, j, angle) {
    context.save();
    context.translate(i + bullWidth / 2, j + bullHeight / 2);
    context.rotate(angle * Math.PI / 180);
    bulletObject.drawImage(bulletImage, -bullWidth / 2, -bullHeight / 2, bullWidth, bullHeight);
    context.restore();
}


