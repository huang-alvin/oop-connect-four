import { Game } from "./game.js";
let game = undefined;
let boardHolder = document.getElementById("board-holder");
let gameName = document.getElementById("game-name");
let clickTarget = document.querySelector("#click-targets");

let p1Input = document.getElementById("player-1-name");
let newGameBtn = document.getElementById("new-game");
let p2Input = document.getElementById("player-2-name");

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

let updateUI = function () {
  if (game === undefined) {
    boardHolder.classList.add("is-invisible");
  } else {
    boardHolder.classList.remove("is-invisible");
    gameName.innerHTML = game.getName();
  }
  if (game.currentPlayer === 1) {
    // asume p1 is red && p2 is black
    clickTarget.classList.add("red");
    clickTarget.classList.remove("black");
  } else {
    clickTarget.classList.add("black");
    clickTarget.classList.remove("red");
  }
  for (let i = 0; i <= 5; i++) {
    for (let j = 0; j <= 6; j++) {
      let tokenVal = game.getTokenAt(i, j);
      let squareId = `#square-${i}-${j}`
      let square = document.querySelector(squareId)
      
      // get row num

      // #square-«i»-«j»
      // #square-«row»-«column»
    }
  }
};

newGameBtn.addEventListener("click", (event) => {
  game = new Game(p1Input.value, p2Input.value);
  console.log(game);
  p1Input.value = "";
  p2Input.value = "";
  newGameBtn.setAttribute("disabled", true); // refactor later
  updateUI();
});

clickTarget.addEventListener("click", (event) => {
  let columnNum = event.target.id[event.target.id.length - 1];
  game.playInColumn(Number(columnNum));
  updateUI();
});
