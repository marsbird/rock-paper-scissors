// randomize opponent's move
function getOpponentMove() {
  // random 0,1,2
  let OpponentMove = Math.floor(Math.random() * 3);
  switch (OpponentMove) {
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

function getPlayerMove() {
  // prompt for player's move and set to lowercase
  let playerMove = prompt("What's your move?").toLowerCase();
  if (["rock", "paper", "scissors"].includes(playerMove)) {
    return playerMove;
  }
  else {
    console.log(`This is rock paper scissors, not rock paper ${playerMove}! Try again!`);
  }
}

function playRound(playerMove, opponentMove) {

  // return results of the round
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
}
