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

function playRound(playerMove, opponentMove) {
  // return this message if a player inputs their move incorrectly
  let errorMessage = `This is rock paper scissors, not rock paper ${playerMove}! Try again!`;
  // clean inputs
  playerMove = playerMove.toLowerCase();
  opponentMove = opponentMove.toLowerCase();
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

function playGame() {
  //   initialize scores
  let playerScore = 0;
  let opponentScore = 0;

  // play a series of rounds, best out of five
  while (playerScore < 3 || opponentScore < 3) {
    // prompt for player's move
    let playerMove = prompt("What's your move?");

    // play round & log result
    result = playRound(playerMove, getOpponentMove());
    console.log(result);

    // update score
    regexPattern = /win/;
    if (regexPattern.match(result)) {
      playerScore++;
    } else {
      opponentScore++;
    }
  }
}
