// Task: Play rock, paper, scissors game

//Computer's play 
function computerPlay() {
    const choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * choice.length)];
}

function playerPlay() {
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

function game() {
    let playerWinCount = 0;
    let computerWinCount = 0;
    let result;
    let resultList;
    for(let i = 0; i < 5; i++) {
        const playerSelection = prompt(`It's your turn:`);
        const computerSelection = computerPlay();
        console.log('player: ' + playerSelection + ' computer: ' + computerSelection);
        result = playRound(playerSelection, computerSelection);
        resultList = result.split(' ');
        console.log(result);
        if(resultList[1] === 'Win!') {
            playerWinCount++;
        } else if(resultList[1] === 'Lose!') {
            computerWinCount++;
        }
    }
    console.log(playerWinCount, computerWinCount);
    if(playerWinCount > computerWinCount) return 'You Win!';
    else if(playerWinCount < computerWinCount) return 'You Lose!';
    else if(playerWinCount === computerWinCount) return `It's a draw, pal!`;
}

// Pre requisites
console.log(game());

