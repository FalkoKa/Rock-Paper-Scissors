// game
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
    let result = '';

    if (player === computer) {
        result = 'Draw! Play again!!!';
    } else if (player === 'rock' && computer === 'scissors') {
        result = 'You Win! Rock beats Scissors';
    } else if (player === 'rock' && computer === 'paper') {
        result = 'You Lose! Paper beats Rock';
    } else if (player === 'paper' && computer === 'rock') {
        result = 'You Win! Paper beats Rock';
    } else if (player === 'paper' && computer === 'scissors') {
        result = 'You Lose! Scissors beat Paper';
    } else if (player === 'scissors' && computer === 'rock') {
        result = 'You Lose! Rock beats Scissors';
    } else if (player === 'scissors' && computer === 'paper') {
        result = 'You Win! Scissors beat Paper';
    }
    return result;
}


function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Choose Rock, Paper, or Scissors')
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    return 'Finished, You played five rounds!'
}


// Wanna add:
// counter function, adding up the scores
// who has 5 points first, wins the round
// in the end, winner is declared