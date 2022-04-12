var enemySpeed;
var enemyX = canvas.width / 2 + 800;
var enemyY = canvas.height / 2;

var enemyHight = 100;
var enemyWidth = 100;

var enemyConteiner = [];
var enemyIndex = 0;
var enemy = canvas.getContext("2d");

var enemyColor = "blue";
var enemyHp = 100;

createEnemy();


function renderEnemy() {
    for (var i = 0; i < enemyConteiner.length; i++) {
        var item = enemyConteiner[i];
        for (var j = 0; j < item.length; j++) {
            enemy.fillStyle = enemyColor;
            enemy.fillRect(item[0], item[1], item[2], item[3]);
        }
    }
}

function createEnemy() {
    enemyX = Math.random() * (canvas.width - enemyWidth);
    enemyY = Math.random() * (canvas.height - enemyHight);
    enemy.fillRect(enemyX, enemyY, enemyWidth, enemyHight);
    enemyConteiner.push([]);
    enemyConteiner[enemyIndex].push(enemyX, enemyY, enemyWidth, enemyHight, enemyHp);
    enemyIndex++
}

function giveColorEnemy() {
    setTimeout(() => color("red"), 1);
    setTimeout(() => color("blue"), 200);
}
function color(color) {
    enemyColor = color;
}


