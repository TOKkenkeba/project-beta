let enemyX;
let enemyY;
let enemyConteiner = [];
let enemy = canvas.getContext("2d");
let enemyMin = canvas.getContext("2d");
let enemyIndex = 0;

createHorde();


function createHorde() {

    createEnemy(enemyWidth, enemyHeight, enemyHp, enemySpeedX, enemySpeedY, enemyIndexDeff);
    createEnemy(enemyWidthMin, enemyHeightMin, enemyHpMin, enemySpeedXMin, enemySpeedYMin, enemyIndexMin);
    createEnemy(enemyWidth, enemyHeight, enemyHp, enemySpeedX, enemySpeedY, enemyIndexDeff);
    createEnemy(enemyWidthMin, enemyHeightMin, enemyHpMin, enemySpeedXMin, enemySpeedYMin, enemyIndexMin);
    createEnemy(enemyWidthCarry, enemyHeightCarry, enemyHpCarry, enemySpeedXCarry, enemySpeedYCarry, enemyIndexCarry);

}

function createEnemy(Width, Height, Hp, SpeedX, SpeedY, Index) {

    if (createEnmeyMinX > canvas.width - Width) {
        createEnmeyMinX = 100;
    }

    if (createEnmeyMinY > canvas.height - Height) {
        createEnmeyMinY = 100;
    }

    this.rand = Math.round(Math.random() * (4 - 1) + 1);
    enemyConteiner.push([]);

    switch (this.rand) {
        case 1:
            enemyConteiner[enemyIndex].push(createEnmeyMinX, 0, Width, Height, Hp, SpeedX, SpeedY, Index);
            createEnmeyMinX += 200;
            break;
        case 2:
            enemyConteiner[enemyIndex].push(0, createEnmeyMinY, Width, Height, Hp, SpeedX, SpeedY, Index);
            createEnmeyMinY += 150;
            break;
        case 3:
            enemyConteiner[enemyIndex].push(canvas.width - Width, createEnmeyMinY, Width, Height, Hp, SpeedX, SpeedY, Index);
            createEnmeyMinY += 200;
            break;
        case 4:
            enemyConteiner[enemyIndex].push(createEnmeyMinX, canvas.height - Height, Width, Height, Hp, SpeedX, SpeedY, Index);
            createEnmeyMinX += 150;
            break;
    }

    enemyIndex++
}

function enemyMove(enemyConteiner) {

    for (let i = 0; i < enemyConteiner.length; i++) {
        let item = enemyConteiner[i];
        for (let j = 0; j < item.length; j++) {

            let line = Math.sqrt((changeX - item[0]) * (changeX - item[0]) + (changeY - item[1]) * (changeY - item[1]));

            xxx = (changeX - item[0]) / line * item[5];
            yyy = (changeY - item[1]) / line * item[6];

            if (line > distanceFromPlayer) {
                if (detectEachOther(item[0] + xxx, item[1], i)) {
                    item[0] += xxx;
                }
                if (detectEachOther(item[0], item[1] + yyy, i)) {
                    item[1] += yyy;
                }

            }
            else if (line < distanceFromPlayer && item[7] == enemyIndexBullEnemy) {
                item[0] += xxx;
                item[1] += yyy;
            }

            let angle = Math.atan((item[1] - changeY) / (item[0] - changeX)) * 180 / Math.PI - 90;

            if (changeX > item[0]) {
                angle += 180;
            }

            rotateEnemy(item[0], item[1], item[2], item[3], angle, item[7]);

            detectColision(j);
        }
    }
}
function detectEachOther(newX, NewY, i) {
    for (let j = 0; j < enemyConteiner.length; j++) {
        if (i != j) {
            if (Math.abs((newX + enemyConteiner[i][2]) / 2 - (enemyConteiner[j][0] + enemyConteiner[j][2]) / 2) < (enemyConteiner[i][2] + enemyConteiner[j][2]) / 3 && Math.abs((NewY + enemyConteiner[i][3]) / 2 - (enemyConteiner[j][1] + enemyConteiner[j][3]) / 2) < (enemyConteiner[i][3] + enemyConteiner[j][3]) / 3) {

                return false;
            }
        }

    }
    return true;
}

function detectColision(j) {

    if (enemyConteiner[j] != undefined) {

        if ((changeX >= enemyConteiner[j][0] && changeX <= enemyConteiner[j][0] + enemyConteiner[j][2] && changeY >= enemyConteiner[j][1] && changeY <= enemyConteiner[j][1] + enemyConteiner[j][3])
            || (changeX + playerWidth >= enemyConteiner[j][0] && changeX + playerWidth <= enemyConteiner[j][0] + enemyConteiner[j][2] && changeY >= enemyConteiner[j][1] && changeY <= enemyConteiner[j][1] + enemyConteiner[j][3])
            || (changeX >= enemyConteiner[j][0] && changeX <= enemyConteiner[j][0] + enemyConteiner[j][2] && changeY + playerHeight >= enemyConteiner[j][1] && changeY + playerHeight <= enemyConteiner[j][1] + enemyConteiner[j][3])
            || (changeX + playerWidth >= enemyConteiner[j][0] && changeX + playerWidth <= enemyConteiner[j][0] + enemyConteiner[j][2] && changeY + playerHeight >= enemyConteiner[j][1] && changeY + playerHeight <= enemyConteiner[j][1] + enemyConteiner[j][3])) {

            gameOver();
            //enemyConteiner = enemyConteiner.filter((enemy) => enemy !== enemyConteiner[j]);
           
        }
    }

}

function rotateEnemy(x, y, width, Height, angle, index) {

    if (gameOverStage == false) {
        context.save();
        context.translate(x + width / 2, y + Height / 2);
        context.rotate(angle * Math.PI / 180);
        if (index == 0) {
            enemy.drawImage(enemyImage, -width / 2, -Height / 2, width, Height);
        }
        if (index == 1) {
            enemyMin.drawImage(enemyImageMin, -width / 2, -Height / 2, width, Height);
        }
        if (index == 2) {
            enemyMin.drawImage(enemyImageCarry, -width / 2, -Height / 2, width, Height);
        }
        if (index == 3) {
            enemyMin.drawImage(enemyImageBullEnemy, -width / 2, -Height / 2, width, Height);
        }
        context.restore();
    }

}


