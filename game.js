import Column from "./column.js";

export class Game {
  constructor(player1Name, player2Name) {
    this.player1 = player1Name;
    this.player2 = player2Name;
    this.currentPlayer = 1;
    this.winnerNumber = 0;

    this.columns = [
      new Column(),
      new Column(),
      new Column(),
      new Column(),
      new Column(),
      new Column(),
      new Column(),
    ];
  }

  getName() {
    if (this.winnerNumber === 3) {
      console.log('get name')
      return `${this.player1} ties with ${this.player2}`
    }
    return `${this.player1} vs. ${this.player2}`;
  }

  playInColumn(columnNum) {
    this.columns[columnNum].add(this.currentPlayer);

    if (this.currentPlayer === 1) {
      this.currentPlayer = 2;
    } else {
      this.currentPlayer = 1;
    }
    console.log('play in')
    this.checkForTie()

  }

  getTokenAt(rowIdx, colIdx) {
    this.column = this.columns[colIdx];

    return this.column.getTokenAt(rowIdx);
    // colums[colIdx]
  }

  isColumnFull(columnIdx) {
    return this.columns[columnIdx].isFull();
  }

  checkForTie() {
    for(let i = 0; i < this.columns.length; i++){
      let column = this.columns[i]
      if(!column.isFull()) {
        return;
      }
    }
    console.log('check tie')
    this.winnerNumber = 3
  }
}
