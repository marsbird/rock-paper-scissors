// randomize opponent's move
function getOpponentMove() {
  // random 0,1,2
  let randNum = Math.floor(Math.random() * 3);
  let opponentMove;
  switch (randNum) {
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

function playRockPaperScissors(playerMove, opponentMove) {
  let errorMessage = `This is rock paper scissors, not rock paper ${playerMove}! Try again!"`;
  // clean inputs
  playerMove = playerMove.toLowerCase();
  opponentMove = opponentMove.toLowerCase();
  if (playerMove == "rock") {
    switch (opponentMove) {
      case "rock":
        return "Tie! Let's play again";
        break;
      case "paper":
        return "You lose! Paper covers rock";
        break;
      case "scissors":
        return "You win! Rock breaks scissors";
        break;
    }
  } else if (playerMove == "paper") {
    switch (opponentMove) {
      case "rock":
        return "You win! Paper covers rock";
        break;
      case "paper":
        return "Tie! Let's play again";
        break;
      case "scissors":
        return "You lose! Scissors cuts paper";
        break;
    }
  } else if (playerMove == "scissors") {
    switch (opponentMove) {
      case "rock":
        return "You lose! Rock breaks scissors";
        break;
      case "paper":
        return "You win! Scissors cuts paper";
        break;
      case "scissors":
        return "Tie! Let's play again";
        break;
    }
  } else return errorMessage;

  // return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
}
