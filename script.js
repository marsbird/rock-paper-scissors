function getOppMove() {
  // random 0,1,2
  let oppMove = Math.floor(Math.random() * 3);
  switch (oppMove) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
}

const btns = document.querySelectorAll("button");
const results = document.querySelector("#results");

function playRound(e) {
  // get move selection from both player and opponent
  let playerMove = e.target.id;
  let oppMove = getOppMove();
  // combine both moves into a single string
  let bothMoves = playerMove+oppMove;
  // compare moves
  switch (bothMoves) {
    case "rockrock":
    results.textContent = "Tie!";
    break;
    case "paperpaper":
    results.textContent = "Tie!";
    break;
    case "scissorsscissors":
    results.textContent = "Tie!";
    break;
    case "rockpaper":
    results.textContent = "You win!";
    break;
    case "rockscissors":
    results.textContent = "You lose!";
    break;
    case "paperrock":
    results.textContent = "You win!";
    break;
    case "paperscissors":
    results.textContent = "You lose!";
    break;
    case "scissorspaper":
    results.textContent = "You win!";
    break;
    case "scissorsrock":
    results.textContent = "You lose!";
    break;
  }
}

btns.forEach((btn) => {
  btn.addEventListener("click", playRound);
});
