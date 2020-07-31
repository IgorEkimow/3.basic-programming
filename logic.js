let players = ['x', 'o'];
let activePlayer = 0;
let pole = 3;
let ground = [];

function startGame() {
  for(let i = 0; i < pole; i++){
    ground[i] = [];
    for(let j = 0; j < pole; j++) {
      ground[i][j] = '';
    }
  }
  renderBoard(ground);
};

function winListener() {
  let winner = players[activePlayer];
  for(let i = 0; i < ground.length; i++) {
    for(let j = 0; j < ground.length; j++) {
      if (ground[i][0] === winner && ground[i][1] === winner && ground[i][2] === winner) {
        showWinner(activePlayer);
      } else if (ground[0][j] === winner && ground[1][j] === winner && ground[2][j] === winner) {
        showWinner(activePlayer);
      } else if (ground[0][0] === winner && ground[1][1] === winner && ground[2][2] === winner) {
        showWinner(activePlayer);
      } else if (ground[0][2] === winner && ground[1][1] === winner && ground[2][0] === winner) {
        showWinner(activePlayer);
      }
    }
  }
}

function click(row, column) {
  ground[row][column] = players[activePlayer];
  renderBoard(ground); 
  winListener();
  activePlayer = activePlayer === 0 ? 1 : 0;  
}