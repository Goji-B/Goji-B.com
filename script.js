const board = document.getElementById("board");
const status = document.getElementById("status");
const resetBtn = document.getElementById("reset");

let currentPlayer = "X";
let cells = Array(9).fill("");

function createBoard() {
  board.innerHTML = "";
  cells.forEach((cell, index) => {
    const div = document.createElement("div");
    div.classList.add("cell");
    div.dataset.index = index;
    div.textContent = cell;
    div.addEventListener("click", handleClick, { once: true });
    board.appendChild(div);
  });
  status.textContent = `Player ${currentPlayer}'s turn`;
}

function handleClick(e) {
  const index = e.target.dataset.index;
  if (cells[index] !== "") return;

  cells[index] = currentPlayer;
  e.target.textContent = currentPlayer;

  if (checkWin()) {
    status.textContent = `Player ${currentPlayer} wins!`;
    board.querySelectorAll(".cell").forEach(cell => cell.removeEventListener("click", handleClick));
  } else if (cells.every(cell => cell !== "")) {
    status.textContent = "It's a draw!";
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    status.textContent = `Player ${currentPlayer}'s turn`;
  }
}

function checkWin() {
  const wins = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];

  return wins.some(combination => {
    const [a, b, c] = combination;
    return cells[a] && cells[a] === cells[b] && cells[a] === cells[c];
  });
}

resetBtn.addEventListener("click", () => {
  cells = Array(9).fill("");
  currentPlayer = "X";
  createBoard();
});

createBoard();
