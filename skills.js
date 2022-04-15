
let teleportIcon = canvas.getContext("2d");
let tleleportHas = true;
function skillsCheck() {

    if (tleleportHas && keysPressed[49] && mouseX <= canvas.width && mouseX >= 0 && mouseY >= 0 && mouseY <= canvas.height) {
        teleport();
        tleleportHas = false;
        setTimeout(() => teleportHasAllow(), 2000);

    }
}

function teleport() {

    changeX = mouseX;
    changeY = mouseY;

}

function teleportHasAllow() {

    tleleportHas = true; 

}

