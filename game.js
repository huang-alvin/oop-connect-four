export class Game {
  constructor(player1Name, player2Name) {
    this.player1 = player1Name;
    this.player2 = player2Name;
  }

  getName() {
    return `${this.player1} vs. ${this.player2}`;
  }
}
