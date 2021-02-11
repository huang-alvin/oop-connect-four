import { Game } from "./game.js";
let game = undefined;
let boardHolder = document.getElementById("board-holder");
let gameName = document.getElementById("game-name");
let clickTarget = document.querySelector("#click-targets");

let updateUI = function () {
  if (game === undefined) {
    boardHolder.classList.add("is-invisible");
  } else {
    boardHolder.classList.remove("is-invisible");
    gameName.innerHTML = game.getName();
  }
  if (game.this.currentPlayer === 1) {
    // asume p1 is red && p2 is black
    clickTarget.classList.add("red");
    clickTarget.classList.remove("black");
  } else {
    clickTarget.classList.add("black");
    clickTarget.classList.remove("red");
  }
};

let p1Input = document.getElementById("player-1-name");
let newGameBtn = document.getElementById("new-game");
let p2Input = document.getElementById("player-2-name");
console.log("dom content");
let playerName = function () {
  if (p1Input.value !== "" && p2Input.value !== "") {
    newGameBtn.disabled = false;

    // newGameBtn.removeAttribute('disabled')
  } else {
    newGameBtn.disabled = true;
  }
};

p1Input.addEventListener("keyup", (event) => {
  playerName();
  console.log("p1");
});

p2Input.addEventListener("keyup", (event) => {
  playerName();
  console.log("p2");
});

newGameBtn.addEventListener("click", (event) => {
  game = new Game(p1Input.value, p2Input.value);
  console.log(game.this.currentPlayer);
  p1Input.value = "";
  p2Input.value = "";
  newGameBtn.setAttribute("disabled", true); // refactor later
  updateUI();
});

console.log(game);
clickTarget.addEventListener("click", (event) => {
  console.log(game);
  game.playInColumn();
  updateUI();
});
