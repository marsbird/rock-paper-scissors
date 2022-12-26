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
  let bothMoves = playerMove + oppMove;
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
      results.textContent = "Paper covers rock - You lose!";
      oppScore += 1;
      break;
    case "rockscissors":
      results.textContent = "Rock breaks scissors - You win!";
      playerScore += 1;
      break;
    case "paperrock":
      results.textContent = "Paper covers rock - You win!";
      playerScore += 1;
      break;
    case "paperscissors":
      results.textContent = "Scissors cuts paper - You lose!";
      oppScore += 1;
      break;
    case "scissorspaper":
      results.textContent = "Scissors cuts paper - You win!";
      playerScore += 1;
      break;
    case "scissorsrock":
      results.textContent = "Rock breaks scissors - You lose!";
      oppScore += 1;
      break;
  }
  if (playerScore == 5) {
    scoreboard.textContent = `${playerScore} to ${oppScore} - YOU WIN!`
    results.textContent = "";
    playerScore = 0
    oppScore = 0
  } else if (oppScore == 5) {
    scoreboard.textContent = `${playerScore} to ${oppScore} - Better luck next time!`
    results.textContent = "";
    playerScore = 0
    oppScore = 0
  } else {
    scoreboard.textContent = `Current Score: ${playerScore} to ${oppScore}`
  }
}

btns.forEach((btn) => {
  btn.addEventListener("click", playRound);
});