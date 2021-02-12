export default class ColumnWinInspector {
    constructor (column) {
        this.column = column;
    }

    inspect() {
        for (let i = 0; i < 3; i++) {
            if(this.column[0 + i] === this.column[1 + i] &&
                this.column[0 + i] === this.column[2 + i] &&
                this.column[0 + i] === this.column[3 + i] &&
                this.column[0 + i] !== null) {
                    return this.column[0 + i]
                }
        }
        return 0
        // 0, 1, 2, 3
        //1,2,3,4
        //2,3,4,5,
    }
}
