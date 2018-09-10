class Block{
    
    // 類別建構子
    // 用來將外部輸入給儲存到 class 內部、也用來宣告類別的成員變數。
    constructor(type, x ,y) {
        this.type = type;
        this.x = x;
        this.y = y;
        this.drawed = false;
    }
}