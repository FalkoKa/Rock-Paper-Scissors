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
        btnDiv.append(brElement);
        btnDiv.append(btnRestart);
        endResult.textContent = 'Finished, You played five rounds! You won';
        buttonRock.style.visibility='hidden';
        buttonPaper.style.visibility='hidden';
        buttonScissors.style.visibility='hidden';
    } else if (computerScore === 5) {
        btnDiv.append(brElement);
        btnDiv.append(btnRestart);
        endResult.textContent = 'Finished, You played five rounds! Computer won';
        buttonRock.style.visibility='hidden';
        buttonPaper.style.visibility='hidden';
        buttonScissors.style.visibility='hidden';
    }
}


//UI
const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');
const resultPar = document.querySelector('#game-result');
const playerS = document.getElementById('player-score');
const computerS = document.getElementById('computer-score');
const endResult = document.getElementById('end-result');
const btnDiv = document.getElementById('button-div');
const btnRestart = document.createElement('button');
const btnAll = document.getElementById('.button');
const brElement = document.createElement('br');

btnRestart.setAttribute('id', 'restart-button')
btnRestart.innerHTML = 'RESTART GAME';

buttonRock.addEventListener('click', () => handleClick('rock'));
buttonPaper.addEventListener('click', () => handleClick('paper'));
buttonScissors.addEventListener('click', () => handleClick('scissors'));
btnRestart.addEventListener('click', () => restartGame());


function handleClick(playerSelection) {
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    gameOver();
}

function restartGame() {
    buttonRock.style.visibility='visible';
    buttonPaper.style.visibility='visible';
    buttonScissors.style.visibility='visible';
    brElement.remove();
    btnRestart.remove();
    result = '';
    playerScore = 0;
    computerScore = 0;
    playerS.innerText = `Player 0`;
    computerS.innerText = `Computer 0`;
    resultPar.textContent = '';
    endResult.textContent = '';
}
