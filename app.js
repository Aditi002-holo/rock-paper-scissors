// Task: Play rock, paper, scissors game

//Computer's play 
function computerPlay() {
    const choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * choice.length)];
}

// a single round of rock, paper, scissors
function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();
    if(playerChoice === 'rock') {
        if(computerSelection === 'rock') {
            return `It's ${playerChoice} Vs. ${computerSelection}. Play Again!`;
        } 
        else if(computerSelection === 'paper') {
            return `You Lose! ${computerSelection} beats ${playerChoice}`;
        } 
        else if(computerSelection === 'scissors') {
            return `You Win! ${playerChoice} beats ${computerSelection}`;
        }
    }

    if(playerChoice === 'paper') {
        if(computerSelection === 'rock') {
            return `You Win! ${playerChoice} beats ${computerSelection}`;       
        } 
        else if(computerSelection === 'paper') {
            return `It's ${playerChoice} Vs. ${computerSelection}. Play Again!`; 
        } 
        else if(computerSelection === 'scissors') {
            return `You Lose! ${computerSelection} beats ${playerChoice}`;
        }
    }

    if(playerChoice === 'scissors') {
        if(computerSelection === 'rock') {
            return `You Lose! ${computerSelection} beats ${playerChoice}`;
        } 
        else if(computerSelection === 'paper') {
            return `You Win! ${playerChoice} beats ${computerSelection}`; 
        } 
        else if(computerSelection === 'scissors') {
            return `It's ${playerChoice} Vs. ${computerSelection}. Play Again!`;
        }
    }
}


// Pre requisites
// const playerSelection = prompt(`It's your turn:`);
const playerSelection = 'rock';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

