let itemBar = canvas.getContext("2d");

function renederItemBar(){
    
    itemBar.fillStyle = "rgba(255, 255, 255, 0.1)";
    itemBar.fillRect(itemBarX,itemBarY,itemBarWidth,itemBarHeigh);

    this.itemBarX=itemBarX+canvas.height*0.0016;
    this.itemBarY=itemBarY+canvas.height*0.0016;
    this.itemBarWidth=itemBarWidth/barNumber-canvas.height*0.0032;
    this.itemBarHeigh= itemBarHeigh-canvas.height*0.0032;

    for (let index = 0; index < barNumber; index++) {
        fillBar(itemBar,`${index+1}`,this.itemBarX+index*itemBarWidth/barNumber,this.itemBarY,this.itemBarWidth,this.itemBarHeigh);
    }

}

function fillBar(item,text,x,y,width,high){
    item.fillStyle = "rgba(255, 255, 255, 0.1)";
    if(text=="1"){
        item.drawImage(teleportImage,x,y, width, high);
    }
    if(text=="2"){
        item.drawImage(healImage,x+canvas.height*0.04/6,y+canvas.height*0.04/6, width-canvas.height*0.04/3, high-canvas.height*0.04/3);
    }
        
    item.fillRect(x,y,width,high);
    item.font = `${canvas.height*0.03}px ariel`;
    item.fillStyle="black";
    item.fillText(text,x+canvas.height*0.04/12,y+canvas.height*0.03);
   
}

