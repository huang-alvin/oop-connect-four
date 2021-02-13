import Column from "./column.js";
import ColumnWinInspector from "./columnwininspector.js";

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
    if (this.winnerNumber === 1) {
      return `${this.player1} wins!`;
    } else if (this.winnerNumber === 2) {
      return `${this.player2} wins!`;
    } else if (this.winnerNumber === 3) {
      console.log("get name");
      return `${this.player1} ties with ${this.player2}`;
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

    this.checkForTie();
    if (this.winnerNumber === 0) {
      this.checkForColumnWin();
    }
  }

  getTokenAt(rowIdx, colIdx) {
    this.column = this.columns[colIdx];

    return this.column.getTokenAt(rowIdx);
    // colums[colIdx]
  }

  isColumnFull(columnIdx) {
    if (this.winnerNumber === 1 || this.winnerNumber === 2) {
      return true;
    }
    return this.columns[columnIdx].isFull();
  }

  checkForTie() {
    for (let i = 0; i < this.columns.length; i++) {
      let column = this.columns[i];
      if (!column.isFull()) {
        return;
      }
    }
    console.log("check tie");
    this.winnerNumber = 3;
  }

  checkForColumnWin() {
    this.columns.forEach((ele) => {
      console.log(ele[5], "ele check");
      let inspector = new ColumnWinInspector(ele);
      //console.log(inspector);
      let result = inspector.inspect();
      //console.log(result);
      if (result === 1 || result === 2) {
        this.winnerNumber = result;
        return;
      }
    });
  }
}
