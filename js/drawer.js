class Drawer {

    // 類別建構子
    // 用來將外部輸入給儲存到 class 內部、也用來宣告類別的成員變數。
    //
    constructor(blockWidth, blockHeight, centerBlockPosX, centerBlockPosY, mapContainer, characterContainer, map, character) {
        this.BLOCK_WIDTH = blockWidth;
        this.BLOCK_HEIGHT = blockHeight;
        this.CENTER_BLOCK_POS_X = centerBlockPosX;
        this.CENTER_BLOCK_POS_Y = centerBlockPosY;
        this.mapContainer = mapContainer;
        this.characterContainer = characterContainer;
        this.map = map;
        this.character = character;
        this.currentMapOffsetX = 0;
    }

    draw() {
        this.drawBlock();
        this.moveMap();
        this.drawCharacter();
    }

    drawCharacter() {
        let marginLeft = this.BLOCK_WIDTH * (this.character.posX - this.CENTER_BLOCK_POS_X);
        let marginTop = this.BLOCK_HEIGHT * (this.character.posY - this.CENTER_BLOCK_POS_Y);
        marginLeft += "px";
        marginTop += "px";

        this.characterContainer.style.marginLeft = marginLeft;
        this.characterContainer.style.marginTop = marginTop;

        let smallCircleElement = document.getElementById("smallCircle");
        switch (this.character.faceDirection) {
            case "UP":
                smallCircleElement.style.marginLeft = "7.5px";
                smallCircleElement.style.marginTop = "-1px";
                break;
            case "RIGHT":
                smallCircleElement.style.marginLeft = "15px";
                smallCircleElement.style.marginTop = "7.5px";
                break;
            case "DOWN":
                smallCircleElement.style.marginLeft = "7.5px";
                smallCircleElement.style.marginTop = "15px";
                break;
            case "LEFT":
                smallCircleElement.style.marginLeft = "-1px";
                smallCircleElement.style.marginTop = "7.5px";
                break;

            default:
                alert("bad argument in drawCharacter()")
                break;
        }
    }

    moveMap() {
        this.mapContainer.style.marginLeft = this.BLOCK_WIDTH * this.currentMapOffsetX + "px";
    }

    drawBlock() {
        let addedDOM = "";
        let listSize = this.map.blockList.length;

        for (let i = 0; i < listSize; ++i) {
            if (this.map.blockList[i].drawed === false) {
                addedDOM +=
                    this.generateFirstPartBlockDOM(this.map.blockList[i].type) +
                    this.generateLastPartBlockDOM(this.map.blockList[i].x, this.map.blockList[i].y);

                this.map.blockList[i].drawed = true;
            }
        }
        this.mapContainer.innerHTML += addedDOM;
    }

    // 類別方法
    // 根據輸入的內容，回傳相應的 DOM 字串
    //
    // 用以產生格子 DOM 的前半部分
    generateFirstPartBlockDOM(blockType) {
        switch (blockType) {
            case "tallGrass":
                return '<img src="pic/tallGrass.png"'
            case "flatGrass":
                return '<img src="pic/flatGrass.png"'
        }
    }

    // 類別方法
    // 根據輸入的內容，回傳相應的 DOM 字串
    //
    // 用以產生格子 DOM 的後半部分
    generateLastPartBlockDOM(blockX, blockY) {
        var theDOM =
            ' width=75px' +
            ' height=75px' +
            ' class="mapBlock"' +
            ' style="margin-left:' + (blockX * this.BLOCK_WIDTH) + 'px;' +
            ' margin-top:' + (blockY * this.BLOCK_HEIGHT) + 'px;"' +
            // ' id=""'+
            ' />';
        return theDOM;
    }
}