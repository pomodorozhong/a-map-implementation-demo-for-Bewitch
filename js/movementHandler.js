class MovementHandler {

    constructor(character, drawer, blockAmountVertical, centerBlockX) {
        this.character = character;
        this.drawer = drawer;
        this.BLOCK_AMOUNT_VERTICAL = blockAmountVertical;
        this.CENTER_BLOCK_POS_X = centerBlockX;


    }

    move(direction) {

        switch (direction) {
            case "UP":
                if (this.character.posY > 0) {
                    this.character.posY -= 1;
                }
                this.character.faceDirection = "UP"
                break;

            case "RIGHT":
                if (this.character.posX > this.CENTER_BLOCK_POS_X - 1) {
                    this.drawer.currentMapOffsetX -= 1;
                } else {
                    this.character.posX += 1;
                }
                this.character.faceDirection = "RIGHT"
                break;

            case "DOWN":
                if (this.character.posY < this.BLOCK_AMOUNT_VERTICAL - 1) {
                    this.character.posY += 1;
                }
                this.character.faceDirection = "DOWN"
                break;

            case "LEFT":
                if (this.character.posX > 0) {
                    this.character.posX -= 1;
                }
                this.character.faceDirection = "LEFT"
                break;

            default:
                alert("bad argument in move()")
                break;
        }
    }
}