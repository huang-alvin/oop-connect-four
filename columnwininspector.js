export default class ColumnWinInspector {
  constructor(column) {
    this.column = column;
  }

  inspect() {
    for (let i = 0; i < 3; i++) {
      let array = this.column.arr;
      if (
        array[0 + i] === array[1 + i] &&
        array[0 + i] === array[2 + i] &&
        array[0 + i] === array[3 + i] &&
        array[0 + i] !== null
      ) {
        console.log("inside inspect");
        return array[0 + i];
      }
    }
    return 0;
    // 0, 1, 2, 3
    //1,2,3,4
    //2,3,4,5,
  }
}
