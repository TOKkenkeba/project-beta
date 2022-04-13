var score = 0;
var xpLevel=0;
var xpBarLevel=0;

var scoreboard = canvas.getContext("2d");
var scoreBoardWidth=200;
var scoreBoradHigh=100;
var scoreboardX=canvas.width-scoreBoardWidth;
var scoreboardY=0;

var xpBar = canvas.getContext("2d");
var xpBarX=itemBarX;
var xpBarY=itemBarY-15;
var xpBarWidth =itemBarWidth;
var xpBarHigh = 10;

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
    var width =xpBarWidth*xpBarLevel/100;
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