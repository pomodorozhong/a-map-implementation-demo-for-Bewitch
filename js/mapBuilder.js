class MapBuilder {
    constructor(map, blockAmountVertical) {
        this.map = map;
        this.BLOCK_AMOUNT_VERTICAL = blockAmountVertical;
    }

    generateMap(rangeInXDirection) {
        for (let x = 0; x < rangeInXDirection; ++x) {
            for (let y = 0; y < this.BLOCK_AMOUNT_VERTICAL; y++) {
                let randType = Math.random() > 0.8 ? "tallGrass" : "flatGrass";
                map.addBlock(randType, x, y);
            }
        }
    }
}