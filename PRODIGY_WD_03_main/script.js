let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];

function handleClick(index) {
    if (!gameActive || gameBoard[index] !== '') return;

    gameBoard[index] = currentPlayer;
    document.getElementsByClassName('box')[index].innerText = currentPlayer;

    if (checkForWin()) {
        document.getElementById('game-status').innerText = `Player ${currentPlayer} wins!`;
        gameActive = false;
    } else if (checkForDraw()) {
        document.getElementById('game-status').innerText = "It's a draw!";
        gameActive = false;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        document.getElementById('game-status').innerText = `Player ${currentPlayer}'s turn`;
    }
}

function checkForWin() {
    for (let combo of winningCombinations) {
        const [a, b, c] = combo;
        if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c]) {
            return true;
        }
    }
    return false;
}

function checkForDraw() {
    return !gameBoard.includes('');
}

function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    document.getElementById('game-status').innerText = `Player ${currentPlayer}'s turn`;

    const boxes = document.getElementsByClassName('box');
    for (let box of boxes) {
        box.innerText = '';
    }
}

// Initial game status
document.getElementById('game-status').innerText = `Player ${currentPlayer}'s turn`;
