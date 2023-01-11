// game
let result = '';
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper';
    } else if (randomNumber === 2) {
        return 'scissors'
    };
}


function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection;

    if (player === computer) {
        result = 'Draw! Play again!!!';
    } else if (player === 'rock' && computer === 'scissors') {
        result = 'You Win! Rock beats Scissors';
        playerScore += 1;
    } else if (player === 'rock' && computer === 'paper') {
        result = 'You Lose! Paper beats Rock';
        computerScore += 1;
    } else if (player === 'paper' && computer === 'rock') {
        result = 'You Win! Paper beats Rock';
        playerScore += 1;
    } else if (player === 'paper' && computer === 'scissors') {
        result = 'You Lose! Scissors beat Paper';
        computerScore += 1;
    } else if (player === 'scissors' && computer === 'rock') {
        result = 'You Lose! Rock beats Scissors';
        computerScore += 1;
    } else if (player === 'scissors' && computer === 'paper') {
        result = 'You Win! Scissors beat Paper';
        playerScore += 1;
    }
    resultPar.textContent = result;
    playerS.innerText = `Player ${playerScore}`;
    computerS.innerText = `Computer ${computerScore}`;
}


function gameOver() {
    if (playerScore === 5) {
        endResult.textContent = 'Finished, You played five rounds! You won';
        return restartGame();
    } else if (computerScore === 5) {
        endResult.textContent = 'Finished, You played five rounds! Computer won';
        return restartGame();
    }
}

// function gameOver() {
//     if (playerScore === 5) {
//         endResult.textContent = 'Finished, You played five rounds! You won';
//         restartBtn.append('div .buttons')
//     } else if (computerScore === 5) {
//         endResult.textContent = 'Finished, You played five rounds! Computer won';
//         restartBtn.append('div .buttons')
//     }
// }
// restartGame() when button clicked


//UI
const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');
const buttonRestart = document.getElementById('button-restart')
const resultPar = document.querySelector('#game-result');
const playerS = document.getElementById('player-score');
const computerS = document.getElementById('computer-score');
const endResult = document.getElementById('end-result');


buttonRock.addEventListener('click', () => handleClick('rock'));
buttonPaper.addEventListener('click', () => handleClick('paper'));
buttonScissors.addEventListener('click', () => handleClick('scissors'));
buttonRestart.addEventListener('click', () => restartGame());


function handleClick(playerSelection) {
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    gameOver();
}


function restartGame() {
    result = '';
    playerScore = 0;
    computerScore = 0;
    playerS.innerText = `Player 0`;
    computerS.innerText = `Computer 0`;
    resultPar.textContent = '';
    endResult.textContent = '';
}