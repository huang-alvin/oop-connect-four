export class Game {
  constructor(player1Name, player2Name) {
    this.player1 = player1Name;
    this.player2 = player2Name;
    this.currentPlayer = 1
  }

  getName() {
    return `${this.player1} vs. ${this.player2}`;
  }

  playInColumn() {
    if (this.currentPlayer === 1) {
      this.currentPlayer = 2
    } else {
      this.currentPlayer = 1
    }
  }
}
