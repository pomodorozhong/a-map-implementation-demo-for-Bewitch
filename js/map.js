class Map {

    // 類別建構子
    // 在這個 Class 內用來宣告類別的成員變數。
    //
    // 宣告成類別成員變數的包含：
    // 1.用來存放全部格子的 List
    constructor() {
        this.blockList = [];
    }

    // 類別方法
    // 以輸入的格子資料，建立相應的格子物件，並儲存到 blockList 內。
    addBlock(blockType, blockX, blockY) {
        this.blockList.push(new Block(blockType, blockX, blockY));
    }
}