function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choices.length);
    console.log('Computer chooses ' + (choices[random]));
    return choices[random];
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection === "rock") {
        if (playerSelection.toLowerCase() === "rock") {
            console.log(`Computer also chose ${computerSelection}! It\'s a draw`);
            return `Computer also chose ${computerSelection}! It\'s a draw`;
        } else if (playerSelection.toLowerCase() === "scissors") {
            console.log(`You lose! Computer chose ${computerSelection}`);
            return `You lose! Computer chose ${computerSelection}`;
        } else 
        console.log(`You win! Computer chose ${computerSelection}`);
        return `You win! Computer chose ${computerSelection}`;
    }

    if (computerSelection === "paper") {
        if (playerSelection.toLowerCase() === "paper") {
            console.log(`Computer also chose ${computerSelection}! It\'s a draw`);
            return `Computer also chose ${computerSelection}! It\'s a draw`;
        } else if (playerSelection.toLowerCase() === "rock") {
            console.log(`You lose! Computer chose ${computerSelection}`);
            return `You lose! Computer chose ${computerSelection}`;
        } else 
        console.log(`You win! Computer chose ${computerSelection}`);
        return `You win! Computer chose ${computerSelection}`;
    }

    if (computerSelection === "scissors") {
        if (playerSelection.toLowerCase() === "scissors") {
            console.log(`Computer also chose ${computerSelection}! It\'s a draw`);
            return `Computer also chose ${computerSelection}! It\'s a draw`;
        } else if (playerSelection.toLowerCase() === "rock") {
            console.log(`You lose! Computer chose ${computerSelection}`);
            return `You lose! Computer chose ${computerSelection}`;
        } else 
        console.log(`You win! Computer chose ${computerSelection}`);
        return `You win! Computer chose ${computerSelection}`;
    }
}

playRound("ROcK",computerPlay());



