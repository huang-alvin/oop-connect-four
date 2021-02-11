import { Game } from "./game.js";
let game = undefined;
window.addEventListener("DCOMContentLoaded", (event) => {
  let p1Input = document.getElementById("player-1-name");
  let newGame = document.getElementById("new-game");
  let p2Input = document.getElementById("player-2-name");
  console.log('dom content')
  let playerName = function () {
    if (p1Input.value !== "" && p2Input.value !== "") {
      newGame.setAttribute("disabled", "false");
    } else {
      newGame.setAttribute("disabled", "true")
    }
  }

  p1Input.addEventListener("keyup", (event) => {
    playerName()
    console.log('p1')
  });

  p2Input.addEventListener("keyup", (event) => {
    playerName()
    console.log('p2')
  });


});
