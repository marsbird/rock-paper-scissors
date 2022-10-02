// randomize opponent's move
function getComputerChoice() {
  // random 0,1,2
  let randNum = Math.floor(Math.random() * 3);
  let oppMove;
  switch (randNum) {
    case 0:
      oppMove = "rock";
      break;
    case 1:
      oppMove = "paper";
      break;
    case 2:
      oppMove = "scissors";
      break;
  }
}
