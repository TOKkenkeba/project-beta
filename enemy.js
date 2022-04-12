var enemyX;
var enemyY;
var enemyConteiner = [];
var enemyIndex = 0;
var enemy = canvas.getContext("2d");
var enemyMin = canvas.getContext("2d");

createHorde();

function renderEnemy() {
    for (var i = 0; i < enemyConteiner.length; i++) {
        var item = enemyConteiner[i];
        for (var j = 0; j < item.length; j++) {
            enemy.fillStyle = enemyColor;
            enemy.fillRect(item[0], item[1], item[2], item[3]);
        }
    }
}

function createHorde() {
    createEnemy(enemyWidth, enemyHight, enemyHp, enemySpeedX, enemySpeedY, enemyColor, enemyIndex);
    createEnemy(enemyWidthMin, enemyHightMin, enemyHpMin, enemySpeedXMin, enemySpeedYMin, enemyColorMin, enemyIndexMin);
    console.log(enemyConteiner[0]);
    console.log(enemyConteiner[1]);
}

function createEnemy(Width, Hight, Hp, SpeedX, SpeedY, Color, Index) {

    enemyX = Math.random() * (canvas.width - Width);
    enemyY = Math.random() * (canvas.height - Hight);
    enemy.fillRect(enemyX, enemyY, Width, Hight);
    enemyConteiner.push([]);
    enemyConteiner[enemyIndex].push(enemyX, enemyY, Width, Hight, Hp, SpeedX, SpeedY, Color, Index);
    enemyIndex++
}

function giveColorEnemy(j) {
    setTimeout(() => color("red", j), 1);

    if (enemyConteiner[j][8] == 0) {
        setTimeout(() => color(enemyColor, j), 50);
    }
    if (enemyConteiner[j][8] == 1) {
        setTimeout(() => color(enemyColorMin, j), 50);
    }

}

function color(color, j) {
    enemyConteiner[j][7] = color;
}

function enemyMove(enemyConteiner) {

    for (var i = 0; i < enemyConteiner.length; i++) {
        var item = enemyConteiner[i];
        for (var j = 0; j < item.length; j++) {

            var line = Math.sqrt((changeX - item[0]) * (changeX - item[0]) + (changeY - item[1]) * (changeY - item[1]));
            xxx = (changeX - item[0]) / line * item[5];
            yyy = (changeY - item[1]) / line * item[6];
            item[0] += xxx;
            item[1] += yyy;
            enemy.fillStyle = item[7];
            enemy.fillRect(item[0], item[1], item[2], item[3]);
            detectColision(j);
        }
    }
}

function detectColision(j) {
    if (enemyConteiner[j] != undefined) {
        if ((changeX >= enemyConteiner[j][0] && changeX <= enemyConteiner[j][0] + enemyConteiner[j][2] && changeY >= enemyConteiner[j][1] && changeY <= enemyConteiner[j][1] + enemyConteiner[j][3])
            || (changeX + playerWidth >= enemyConteiner[j][0] && changeX + playerWidth <= enemyConteiner[j][0] + enemyConteiner[j][2] && changeY >= enemyConteiner[j][1] && changeY <= enemyConteiner[j][1] + enemyConteiner[j][3])
            || (changeX >= enemyConteiner[j][0] && changeX <= enemyConteiner[j][0] + enemyConteiner[j][2] && changeY + playerHigh >= enemyConteiner[j][1] && changeY + playerHigh <= enemyConteiner[j][1] + enemyConteiner[j][3])
            || (changeX + playerWidth >= enemyConteiner[j][0] && changeX + playerWidth <= enemyConteiner[j][0] + enemyConteiner[j][2] && changeY + playerHigh >= enemyConteiner[j][1] && changeY + playerHigh <= enemyConteiner[j][1] + enemyConteiner[j][3])) {
            endGame();
            location.reload();
            enemyConteiner = enemyConteiner.filter((enemy) => enemy !== enemyConteiner[j]);
        }
    }

}

