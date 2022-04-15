let enemyX;
let enemyY;
let enemyConteiner = [];
let enemy = canvas.getContext("2d");
let enemyMin = canvas.getContext("2d");

createHorde();

function createHorde() {
   
    createEnemy(enemyWidth, enemyHight, enemyHp, enemySpeedX, enemySpeedY, enemyIndex);
    createEnemy(enemyWidthMin, enemyHightMin, enemyHpMin, enemySpeedXMin, enemySpeedYMin, enemyIndexMin);
    createEnemy(enemyWidth, enemyHight, enemyHp, enemySpeedX, enemySpeedY, enemyIndex);
   
    createEnemy(enemyWidthMin, enemyHightMin, enemyHpMin, enemySpeedXMin, enemySpeedYMin, enemyIndexMin);
}

function createEnemy(Width, Hight, Hp, SpeedX, SpeedY, Index) {

    enemyX = Math.random() * (canvas.width - Width);
    enemyY = Math.random() * (canvas.height - Hight);
    let rand = Math.round(Math.random() * (4 - 1) + 1);
    enemyConteiner.push([]);
    switch (rand) {
        case 1:
            enemyConteiner[enemyIndex].push(enemyX, 0, Width, Hight, Hp, SpeedX, SpeedY, Index);
            break;
        case 2:
            enemyConteiner[enemyIndex].push(0, enemyY, Width, Hight, Hp, SpeedX, SpeedY,  Index);
            break;
        case 3:
            enemyConteiner[enemyIndex].push(canvas.width - Width, enemyY, Width, Hight, Hp, SpeedX, SpeedY,  Index);
            break;
        case 4:
            enemyConteiner[enemyIndex].push(enemyX, canvas.height - Hight, Width, Hight, Hp, SpeedX, SpeedY, Index);
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
            item[0] += xxx;
            item[1] += yyy;
      
            let angle =Math.atan((item[1]-changeY)/(item[0]-changeX))*180/Math.PI-90;
          
            if(changeX>item[0]){
                angle+=180;
             }

             rotateEnemy(item[0], item[1], item[2], item[3],angle,item[7]);
           
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
            gameOver();
            enemyConteiner = enemyConteiner.filter((enemy) => enemy !== enemyConteiner[j]);
        }
    }

}

function rotateEnemy(x,y,width,high,angle,index){

   if(gameOverStage==false){
    context.save();
    context.translate(x+width/2, y+high/2);    
    context.rotate(angle* Math.PI / 180);
    if(index%2==0){
        enemy.drawImage(enemyImage,-width/2,-high/2, width, high);
    }
    else {
        enemyMin.drawImage(enemyImageMin,-width/2,-high/2, width, high);
    }   
    context.restore();
   }
    
 
    

}


