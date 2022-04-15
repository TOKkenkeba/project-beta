let score = 0;
let xpLevel=0;
let xpBarLevel=0;

let scoreboard = canvas.getContext("2d");
let scoreBoardWidth=200;
let scoreBoradHigh=100;
let scoreboardX=canvas.width-scoreBoardWidth;
let scoreboardY=0;

let xpBar = canvas.getContext("2d");
let xpBarX=itemBarX;
let xpBarY=itemBarY-15;
let xpBarWidth =itemBarWidth;
let xpBarHigh = 10;

function renderScoreBoard(){
    scoreboard.fillStyle = "rgba(255, 255, 255, 0.1)";
    scoreboard.fillRect(scoreboardX,scoreboardY,scoreBoardWidth,scoreBoradHigh);
    scoreboard.font = "20px ariel";
    scoreboard.fillStyle = "rgba(0, 255, 0, 0.5)";
    scoreboard.fillText(`Score : ${score}`,scoreboardX+scoreBoardWidth*30/100,scoreboardY+scoreBoradHigh*30/100);
    scoreboard.fillText(`Level : ${xpLevel}`,scoreboardX+scoreBoardWidth*30/100,scoreboardY+scoreBoradHigh*70/100);
}



function xpBarRender(){
    xpBar.fillStyle = "rgba(255, 255, 255, 0.1)";
    xpBar.fillRect(xpBarX,xpBarY,xpBarWidth,xpBarHigh);

}

function xpBarRenderFill(){
    let width =xpBarWidth*xpBarLevel/100;
    xpBar.fillStyle = "rgba(0, 255, 0, 0.5)";
    xpBar.fillRect(xpBarX,xpBarY,width,xpBarHigh);

}

function countScoreAndLevel(){
  score++;
  xpBarLevel+=21;
  if(xpBarLevel>=100){
    xpBarLevel-=100;
    xpLevel++;
  }
}