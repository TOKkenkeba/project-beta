var mag = [[]];
var index = 0;
var bulletObject = canvas.getContext("2d");

function bullet(high, width, x, y, pageX, pageY) {
    bulletObject.fillStyle = bulletColor;
    bulletObject.fillRect(x, y, width, high);

    mag.push([]);
    var line = Math.sqrt((pageX - x) * (pageX - x) + (pageY - y) * (pageY - y));
    xxx = (pageX - x) / line * bullSpeed;
    yyy = (pageY - y) / line * bullSpeed;
    mag[index].push(x, y, width, high, index, xxx, yyy);
    index++;
}

function renderBullets() {

    moveBullet();
    for (var i = 0; i < mag.length; i++) {
        var item = mag[i];
        for (var j = 0; j < item.length; j++) {
            bulletObject.fillStyle = bulletColor;
            bulletObject.fillRect(item[0], item[1], item[2], item[3]);
        }
    }
}

function moveBullet() {
    for (var i = 0; i < mag.length; i++) {
        var item = mag[i];
        for (var j = 0; j < item.length; j++) {
            item[0] += item[5];
            item[1] += item[6];
        }
        if ((item[0] > canvas.width || item[0] < 0) && item[0] != undefined) {
            mag.splice(i, 1);
            index = mag.length;
        }
        if ((item[1] > canvas.height || item[1] < 0) && item[1] != undefined) {
            mag.splice(i, 1);
            index = mag.length;
        }

        hitEnemyWithhBullets(mag[i], i);
    }
}

function hitEnemyWithhBullets(item, bullet) {

    if (item != undefined) {

        for (var j = 0; j < enemyConteiner.length; j++) {

            if ((item[0] >= enemyConteiner[j][0] && item[0] <= enemyConteiner[j][0] + enemyConteiner[j][2] && item[1] >= enemyConteiner[j][1] && item[1] <= enemyConteiner[j][1] + enemyConteiner[j][3])
                || (item[0] + bullWidth >= enemyConteiner[j][0] && item[0] + bullWidth <= enemyConteiner[j][0] + enemyConteiner[j][2] && item[1] >= enemyConteiner[j][1] && item[1] <= enemyConteiner[j][1] + enemyConteiner[j][3])
                || (item[0] >= enemyConteiner[j][0] && item[0] <= enemyConteiner[j][0] + enemyConteiner[j][2] && item[1] + bullHigh >= enemyConteiner[j][1] && item[1] + bullHigh <= enemyConteiner[j][1] + enemyConteiner[j][3])
                || (item[0] + bullWidth >= enemyConteiner[j][0] && item[0] + bullWidth <= enemyConteiner[j][0] + enemyConteiner[j][2] && item[1] + bullHigh >= enemyConteiner[j][1] && item[1] + bullHigh <= enemyConteiner[j][1] + enemyConteiner[j][3])) {

                mag.splice(bullet, 1);
                index = mag.length;
                enemyConteiner[j][4] -= bulletDmg;

                if (enemyConteiner[j][4] > 0) {
                    giveColorEnemy(j);
                }

                checkIfDead(enemyConteiner[j][4], j);
            }
        }
    }

}
function checkIfDead(enemyHp, enemy1) {
    if (enemyHp <= 0) {
        enemyConteiner = enemyConteiner.filter((enemy) => enemy !== enemyConteiner[enemy1]);
        enemyIndex = enemyConteiner.length;
        score++;
        if (enemyConteiner.length == 0) {

            createHorde();

        }

    }
}

