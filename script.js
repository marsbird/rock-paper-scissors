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
