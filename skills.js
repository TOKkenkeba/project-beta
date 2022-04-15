
let teleportIcon = canvas.getContext("2d");
let tleleportHas = true;
let healHas = true;
function skillsCheck() {

    if (tleleportHas && keysPressed[49] && mouseX <= canvas.width && mouseX >= 0 && mouseY >= 0 && mouseY <= canvas.height) {
        teleport();
        tleleportHas = false;
        setTimeout(() => teleportHasAllow(), 2000);

    }
    if (healHas && keysPressed[50]) {
        heal();
        healHas = false;
        setTimeout(() => healHasAllow(), 2000);

    }
}

function teleport() {

    changeX = mouseX;
    changeY = mouseY;

}

function heal() {

    playerHP += 500;
    if (playerHP > playerHPstart) {
        playerHP = playerHPstart;
    }

}

function teleportHasAllow() {

    tleleportHas = true;

}

function healHasAllow() {

    healHas = true;

}