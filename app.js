// Task: Play rock, paper, scissors game

//Computer's play 
function computerPlay() {
    const choice = ['rock', 'paper', 'scissors'];
    // console.log(choice[Math.floor(Math.random() * choice.length)])
    return choice[Math.floor(Math.random() * choice.length)];
}

