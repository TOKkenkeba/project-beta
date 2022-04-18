let curentLevel = 0;
initLevel();
function initLevel() {
  
    console.log(curentLevel);
    curentLevel+=1;
    switch (curentLevel) {
        case 1:
            createEnemy(enemyWidth, enemyHeight, enemyHp, enemySpeedX, enemySpeedY, enemyIndexDeff, 1);
            break;
        case 2:
            createEnemy(enemyWidth, enemyHeight, enemyHp, enemySpeedX, enemySpeedY, enemyIndexDeff, 1);
            createEnemy(enemyWidthMin, enemyHeightMin, enemyHpMin, enemySpeedXMin, enemySpeedYMin, enemyIndexMin, 1);
            break;
        case 3:
            createEnemy(enemyWidth, enemyHeight, enemyHp, enemySpeedX, enemySpeedY, enemyIndexDeff,2);
            createEnemy(enemyWidthMin, enemyHeightMin, enemyHpMin, enemySpeedXMin, enemySpeedYMin, enemyIndexMin,1);
            break;
        case 4:
            createEnemy(enemyWidth, enemyHeight, enemyHp, enemySpeedX, enemySpeedY, enemyIndexDeff,2);
            createEnemy(enemyWidthMin, enemyHeightMin, enemyHpMin, enemySpeedXMin, enemySpeedYMin, enemyIndexMin,2);
            break;
        case 5:
            createEnemy(enemyWidth, enemyHeight, enemyHp, enemySpeedX, enemySpeedY, enemyIndexDeff,2);
            createEnemy(enemyWidthMin, enemyHeightMin, enemyHpMin, enemySpeedXMin, enemySpeedYMin, enemyIndexMin,2);
            createEnemy(enemyWidthCarry, enemyHeightCarry, enemyHpCarry, enemySpeedXCarry, enemySpeedYCarry, enemyIndexCarry,1);
            break;
        case 6:
            createEnemy(enemyWidth, enemyHeight, enemyHp, enemySpeedX, enemySpeedY, enemyIndexDeff,3);
            createEnemy(enemyWidthMin, enemyHeightMin, enemyHpMin, enemySpeedXMin, enemySpeedYMin, enemyIndexMin,2);
            createEnemy(enemyWidthCarry, enemyHeightCarry, enemyHpCarry, enemySpeedXCarry, enemySpeedYCarry, enemyIndexCarry,1);
            break;
        case 7:
            createEnemy(enemyWidth, enemyHeight, enemyHp, enemySpeedX, enemySpeedY, enemyIndexDeff,3);
            createEnemy(enemyWidthMin, enemyHeightMin, enemyHpMin, enemySpeedXMin, enemySpeedYMin, enemyIndexMin,3);
            createEnemy(enemyWidthCarry, enemyHeightCarry, enemyHpCarry, enemySpeedXCarry, enemySpeedYCarry, enemyIndexCarry,1);
            break;
        case 8:
            createEnemy(enemyWidth, enemyHeight, enemyHp, enemySpeedX, enemySpeedY, enemyIndexDeff,3);
            createEnemy(enemyWidthMin, enemyHeightMin, enemyHpMin, enemySpeedXMin, enemySpeedYMin, enemyIndexMin,3);
            createEnemy(enemyWidthCarry, enemyHeightCarry, enemyHpCarry, enemySpeedXCarry, enemySpeedYCarry, enemyIndexCarry,2);
            break;
        case 9:
            createEnemy(enemyWidth, enemyHeight, enemyHp, enemySpeedX, enemySpeedY, enemyIndexDeff,4);
            createEnemy(enemyWidthMin, enemyHeightMin, enemyHpMin, enemySpeedXMin, enemySpeedYMin, enemyIndexMin,3);
            createEnemy(enemyWidthCarry, enemyHeightCarry, enemyHpCarry, enemySpeedXCarry, enemySpeedYCarry, enemyIndexCarry,2);
            break;
        case 10:
            createEnemy(enemyWidth, enemyHeight, enemyHp, enemySpeedX, enemySpeedY, enemyIndexDeff,4);
            createEnemy(enemyWidthMin, enemyHeightMin, enemyHpMin, enemySpeedXMin, enemySpeedYMin, enemyIndexMin,4);
            createEnemy(enemyWidthCarry, enemyHeightCarry, enemyHpCarry, enemySpeedXCarry, enemySpeedYCarry, enemyIndexCarry,2);
            break;
        default:
            createEnemy(enemyWidth, enemyHeight, enemyHp, enemySpeedX, enemySpeedY, enemyIndexDeff,4);
            createEnemy(enemyWidthMin, enemyHeightMin, enemyHpMin, enemySpeedXMin, enemySpeedYMin, enemyIndexMin,4);
            createEnemy(enemyWidthCarry, enemyHeightCarry, enemyHpCarry, enemySpeedXCarry, enemySpeedYCarry, enemyIndexCarry,2);
            break;
    }
    
    


}

