//canvas
const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth - 4;
canvas.height = window.innerHeight - 6;

//main
let mainBackground = new Image();
mainBackground.src = 'gif/background.jpg';

//player
let playerHP = 2000;
const playerHPstart = 2000;
let playerSpeedX = 10;
let playerSpeedY = 10;
let playerHeight = canvas.height * 0.04;//60
let playerWidth = canvas.height * 0.04;
let playerImage = new Image();
playerImage.src = 'gif/Starship.png';

//bullet
let bullSpeed = 4;
let bullHeight = 15;
let bullWidth = 15;
let bulletDmg = 20;
let bulletImage = new Image();
bulletImage.src = 'gif/bullet.png';
let bulletImageEnemy = new Image();
bulletImageEnemy.src = 'gif/enemyBullets.png';

//Enemy Type deff
let enemyIndexDeff = 0;
let enemyBulletSpeedDeff=2200;
let enemyHeight = canvas.height * 0.08;
let enemyWidth = canvas.height * 0.08;
let enemyHp = 200;
let enemySpeedX = 0.5;
let enemySpeedY = 0.5;
let enemyImage = new Image();
enemyImage.src = 'gif/enemy.png';


//Enemy Type extra
let enemyBulletSpeedMin=1600;
let enemyBulletSpeed = 400;
let distanceFromPlayer = 800;
let enemyIndexMin = 1;
let enemyHeightMin = canvas.height * 0.04;
let enemyWidthMin = canvas.height * 0.04;
let enemyHpMin = 100;
let enemySpeedXMin = 1;
let enemySpeedYMin = 1;
let enemyImageMin = new Image();
enemyImageMin.src = 'gif/enemymin.png';

//Enemy Type Carry
let enemyBulletSpeedCarry=2900;
let enemyIndexCarry = 2;
let enemyHeightCarry = canvas.height * 0.12;
let enemyWidthCarry = canvas.height * 0.12;
let enemyHpCarry = 100;
let enemySpeedXCarry = 0.1;
let enemySpeedYCarry = 0.1;
let enemyImageCarry = new Image();
enemyImageCarry.src = 'gif/3.png';

//Enemy Type BullEnemy
let enemyBulletSpeedBullEnemy=700;
let enemyIndexBullEnemy = 3;
let enemyHeightBullEnemy = canvas.height * 0.04;
let enemyWidthBullEnemy = canvas.height * 0.04;
let enemyHpBullEnemy = 60;
let enemySpeedXBullEnemy = 1;
let enemySpeedYBullEnemy = 1;
let enemyImageBullEnemy = new Image();
enemyImageBullEnemy.src = 'gif/1.png';

//skill
let teleportImage = new Image();
teleportImage.src = 'gif/teleport.png';
let healImage = new Image();
healImage.src = 'gif/heal.png';


//item Bar
let barNumber = 5;
let itemBarWidth = canvas.height * 0.08 * barNumber;
let itemBarHeigh = canvas.height * 0.08;
let itemBarX = canvas.width / 2 - itemBarWidth / 2;
let itemBarY = canvas.height - itemBarHeigh;

//
let createEnmeyMinX = 100;
let createEnmeyMinY = 100;
