var map = null;
var drawer = null;

var character = null;
var movementHandler = null;
var mapContainer = document.getElementById("mapContainer");
// var currentMapOffsetY = 0;
// var currentMapOffsetX = 0;
const BLOCK_WIDTH = 75;
const BLOCK_HEIGHT = 75;
const BLOCK_AMOUNT_VERTICAL = 7;
const CENTER_BLOCK_POS_X = 2;
const CENTER_BLOCK_POS_Y = 3;
const CHARACTER_BLOCK_X = CENTER_BLOCK_POS_X;
const CHARACTER_BLOCK_Y = CENTER_BLOCK_POS_Y;


function initial() {
    document.addEventListener("keypress", keyPressHandler, false);


    mapContainer = document.getElementById("mapContainer");
    characterContainer = document.getElementById("characterContainer");

    map = new Map();

    mapBuilder = new MapBuilder(
        map,
        BLOCK_AMOUNT_VERTICAL
    );

    character = new Character(
        CHARACTER_BLOCK_X,
        CHARACTER_BLOCK_Y,
    );

    drawer = new Drawer(
        BLOCK_WIDTH,
        BLOCK_HEIGHT,
        CENTER_BLOCK_POS_X,
        CENTER_BLOCK_POS_Y,
        mapContainer,
        characterContainer,
        map,
        character
    );

    movementHandler = new MovementHandler(
        character,
        drawer,
        BLOCK_AMOUNT_VERTICAL,
        CENTER_BLOCK_POS_X
    );

    mapBuilder.generateMap(24);
    drawer.draw();
}

// function moveMapUp() {
//     movementHandler.move("DOWN");
//     drawer.draw();
// }

// function moveMapDown() {
//     movementHandler.move("UP");
//     drawer.draw();
// }

// function moveMapRight() {
//     movementHandler.move("LEFT");
//     drawer.draw();
// }

// function moveMapLeft() {
//     movementHandler.move("RIGHT");
//     drawer.draw();
// }

function keyPressHandler(e) {
    if (e.keyCode == 68 || e.keyCode == 100) {
        movementHandler.move("RIGHT");
        drawer.draw();
    }
    if (e.keyCode == 65 || e.keyCode == 97) {
        movementHandler.move("LEFT");
        drawer.draw();
    }
    if (e.keyCode == 87 || e.keyCode == 119) {
        movementHandler.move("UP");
        drawer.draw();
    }
    if (e.keyCode == 83 || e.keyCode == 115) {
        movementHandler.move("DOWN");
        drawer.draw();
    }
    // if(e.keyCode == 32) {
    //     spacePressed = true;
    // }
}