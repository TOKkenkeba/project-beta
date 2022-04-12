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

var enemySpeedX=0.5;
var enemySpeedY=0.5;

var enemySpeedXDiag=enemySpeedX / Math.sqrt(2, 2);;
var enemySpeedYDiag=enemySpeedY / Math.sqrt(2, 2);;


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

function enemyMove(enemyConteiner){

    for (var i = 0; i < enemyConteiner.length; i++) {
        var item = enemyConteiner[i];
        for (var j = 0; j < item.length; j++) {

            var line = Math.sqrt(( changeX-item[0] ) * ( changeX-item[0]) + ( changeY-item[1] ) * ( changeY-item[1] ));
            xxx = ( changeX -item[0]) / line * enemySpeedX;
            yyy = ( changeY-item[1]) / line * enemySpeedY;
            item[0]+=xxx;
            item[1]+=yyy;
            
            enemy.fillStyle = enemyColor;
            enemy.fillRect(item[0], item[1], item[2], item[3]);
            detectColision(j);
        }
    }
}

function detectColision(j){
    if(enemyConteiner[j] != undefined){
        if ((changeX >= enemyConteiner[j][0] && changeX <= enemyConteiner[j][0] + enemyConteiner[j][2] && changeY >= enemyConteiner[j][1] && changeY <= enemyConteiner[j][1] + enemyConteiner[j][3])
        || (changeX+ objectWidth >= enemyConteiner[j][0] && changeX + objectWidth <= enemyConteiner[j][0] + enemyConteiner[j][2] && changeY >= enemyConteiner[j][1] && changeY <= enemyConteiner[j][1] + enemyConteiner[j][3])
        || (changeX>= enemyConteiner[j][0] && changeX <= enemyConteiner[j][0] + enemyConteiner[j][2] && changeY + objectHigh >= enemyConteiner[j][1] && changeY + objectHigh <= enemyConteiner[j][1] + enemyConteiner[j][3])
        || (changeX + objectWidth >= enemyConteiner[j][0] && changeX + objectWidth <= enemyConteiner[j][0] + enemyConteiner[j][2] && changeY + objectHigh >= enemyConteiner[j][1] && changeY + objectHigh <= enemyConteiner[j][1] + enemyConteiner[j][3])) {
            endGame();
            location.reload();
            enemyConteiner = enemyConteiner.filter((enemy) => enemy !== enemyConteiner[j]);
       
    }
    }

}

