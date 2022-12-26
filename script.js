const btns = document.querySelectorAll("button");
const results = document.querySelector("#results");
const scoreboard = document.querySelector("#score");

let playerScore = 0;
let oppScore = 0;

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
    playerScore =+ 1;
    break;
    case "rockscissors":
    results.textContent = "You lose!";
    oppScore =+ 1;
    break;
    case "paperrock":
    results.textContent = "You win!";
    playerScore =+ 1;
    break;
    case "paperscissors":
    results.textContent = "You lose!";
    oppScore =+ 1;
    break;
    case "scissorspaper":
    results.textContent = "You win!";
    playerScore =+ 1;
    break;
    case "scissorsrock":
    results.textContent = "You lose!";
    oppScore =+ 1;
    break;
  }
  scoreboard.textContent = `Current Score: ${playerScore} to ${oppScore}`
}

btns.forEach((btn) => {
  btn.addEventListener("click", playRound);
});

// TODO it looks like the score won't increase past 1 for some reason, and sometimes nothing happens on click