let barNumber = 5;
let itemBarWidth=100*barNumber;
let itemBarHeigh=100;
let itemBarX =canvas.width/2-itemBarWidth/2;
let itemBarY= canvas.height-itemBarHeigh;
let itemBar = canvas.getContext("2d");

let itemOne = canvas.getContext("2d");
let itemTwo= canvas.getContext("2d");
let itemThree = canvas.getContext("2d");
let itemFour = canvas.getContext("2d");
let itemFive = canvas.getContext("2d");

function renederItemBar(){
    
    itemBar.fillStyle = "rgba(255, 255, 255, 0.1)";
    itemBar.fillRect(itemBarX,itemBarY,itemBarWidth,itemBarHeigh);

     fillBar(itemOne,"1",itemBarX+2.5,itemBarY+2.5,itemBarWidth/barNumber-5,itemBarHeigh-5);
     fillBar(itemTwo,"2",itemBarX+2.5+itemBarWidth/barNumber,itemBarY+2.5,itemBarWidth/barNumber-5,itemBarHeigh-5);
     fillBar(itemThree,"3",itemBarX+2.5+2*itemBarWidth/barNumber,itemBarY+2.5,itemBarWidth/barNumber-5,itemBarHeigh-5);
     fillBar(itemFour,"4",itemBarX+2.5+3*itemBarWidth/barNumber,itemBarY+2.5,itemBarWidth/barNumber-5,itemBarHeigh-5);
     fillBar(itemFive,"5",itemBarX+2.5+4*itemBarWidth/barNumber,itemBarY+2.5,itemBarWidth/barNumber-5,itemBarHeigh-5);

}

function fillBar(item,text,x,y,width,high){
    item.fillStyle = "rgba(255, 255, 255, 0.1)";
    if(text=="1"){
        item.drawImage(teleportImage,x,y, width, high);
    }
    if(text=="2"){
        item.drawImage(healImage,x+10,y+10, width-20, high-20);
    }
        
    item.fillRect(x,y,width,high);
    item.font = "30px ariel";
    item.fillStyle="black";
    item.fillText(text,x+5,y+30);
   
}

