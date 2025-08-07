const board = document.getElementById('board');
const status = document.getElementById('status');
const reset = document.getElementById('reset');

let currentPlayer = 'X';
let gameActive = true;
let gameState = Array(9).fill("");

const winCombos = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
];

for (let i = 0; i < 9; i++) {
  const tile = document.createElement('div');
  tile.classList.add('tile');
  tile.dataset.index = i;
  board.appendChild(tile);
}

function handleClick(e) {
  const index = e.target.dataset.index;
  if (!gameActive || gameState[index] !== "") return;

  gameState[index] = currentPlayer;
  e.target.textContent = currentPlayer;
  e.target.classList.add(currentPlayer.toLowerCase());

  if (checkWin()) {
    status.textContent = `Player ${currentPlayer} wins!`;
    gameActive = false;
    highlightWinner();
  } else if (!gameState.includes("")) {
    status.textContent = "It's a draw!";
    gameActive = false;
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    status.textContent = `Player ${currentPlayer}'s turn`;
  }
}

function checkWin() {
  return winCombos.some(combo => {
    const [a, b, c] = combo;
    return (
      gameState[a] &&
      gameState[a] === gameState[b] &&
      gameState[a] === gameState[c]
    );
  });
}

function highlightWinner() {
  winCombos.forEach(combo => {
    const [a, b, c] = combo;
    if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
      board.children[a].classList.add('winner');
      board.children[b].classList.add('winner');
      board.children[c].classList.add('winner');
    }
  });
}

function resetGame() {
  gameState = Array(9).fill("");
  currentPlayer = 'X';
  gameActive = true;
  status.textContent = `Player X's turn`;

  Array.from(board.children).forEach(tile => {
    tile.textContent = '';
    tile.className = 'tile';
  });
}

board.addEventListener('click', handleClick);
reset.addEventListener('click', resetGame);
