
var teleportIcon = canvas.getContext("2d");
var tleleportHas=true;
function skillsCheck(){
    
   
    if(tleleportHas && keysPressed["1"]){
        teleport();
        tleleportHas=false;
        setTimeout(()=>teleportHasAllow(),2000);
    }
   
}

function teleport(){
        changeX=mouseX;
        changeY=mouseY; 
}

function teleportHasAllow(){
    tleleportHas=true;
}

