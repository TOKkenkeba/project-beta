//main
let mainBackground = new Image();
mainBackground.src = 'gif/background.jpg';

//player
let playerHP = 1000;
let playerSpeedX = 10;
let playerSpeedY = 10;
let playerHigh = 60;
let playerWidth = 60;
let playerImage = new Image();
playerImage.src = 'gif/Starship.png';

//bullet
let bullSpeed = 4;
let bullHigh = 15;
let bullWidth = 15;
let bulletDmg = 20;
let bulletImage = new Image();
bulletImage.src = 'gif/bullet.png';


//Enemy Type deff
let enemyIndex = 0;
let enemyHight = 100;
let enemyWidth = 100;
let enemyHp = 200;
let enemySpeedX = 0.5;
let enemySpeedY = 0.5;
let enemyImage = new Image();
enemyImage.src = 'gif/enemy.png';


//Enemy Type extra
let enemyBulletSpeed=400;
let distanceFromPlayer = 800;
let enemyIndexMin = 1;
let enemyHightMin = 50;
let enemyWidthMin = 50;
let enemyHpMin = 100;
let enemySpeedXMin = 1;
let enemySpeedYMin = 1;
let enemyImageMin = new Image();
enemyImageMin.src = 'gif/enemymin.png';

//skill
let teleportImage = new Image();
teleportImage.src = 'gif/teleport.png';