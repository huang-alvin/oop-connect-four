import Column from ('./column.js');


export class Game {
  constructor(player1Name, player2Name) {
    this.player1 = player1Name;
    this.player2 = player2Name;
    this.currentPlayer = 1;

    this.columns = [new Column(), new Column(), new Column(),
      new Column(), new Column(), new Column(), new Column()];
  }

  getName() {
    return `${this.player1} vs. ${this.player2}`;
  }

  playInColumn(columnNum) {

    this.columns[columnNum].add(this.currentPlayer)

    if (this.currentPlayer === 1) {
      this.currentPlayer = 2;
    } else {
      this.currentPlayer = 1;
    }
  }

  getTokenAt (rowIdx, colIdx) {
    this.column = this.columns[colIdx]

    return this.column.getTokenAt(rowIdx)
    // colums[colIdx]

  }
}
