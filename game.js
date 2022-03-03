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
            return "Draw";
        } else if (playerSelection.toLowerCase() === "scissors") {
            console.log(`You lose! Computer chose ${computerSelection}`);
            return "Lose"; //PLayer loses
        } else 
        console.log(`You win! Computer chose ${computerSelection}`);
        return "Win"; //Player wins
    }

    if (computerSelection === "paper") {
        if (playerSelection.toLowerCase() === "paper") {
            console.log(`Computer also chose ${computerSelection}! It\'s a draw`);
            return "Draw";
        } else if (playerSelection.toLowerCase() === "rock") {
            console.log(`You lose! Computer chose ${computerSelection}`);
            return "Lose";
        } else 
        console.log(`You win! Computer chose ${computerSelection}`);
        return "Win";
    }

    if (computerSelection === "scissors") {
        if (playerSelection.toLowerCase() === "scissors") {
            console.log(`Computer also chose ${computerSelection}! It\'s a draw`);
            return "Draw";
        } else if (playerSelection.toLowerCase() === "rock") {
            console.log(`You lose! Computer chose ${computerSelection}`);
            return "Lose";
        } else 
        console.log(`You win! Computer chose ${computerSelection}`);
        return "Win";
    }
}

for (let i = 1; i <= 5; i++) {
    console.log(`Round ${i}`);
    playRound("Rock",computerPlay());
    countPoints();
}

function countPoints() {
    let result;
    let playerScore = 0;
    let computerScore = 0;
    if (playRound() === "Draw") {
        playerScore += 0;
        computerScore += 0;
        result = `${playerScore} : ${computerScore}`
    } else if (playRound() === "Win") {
        playerScore += 1;
        computerScore += 0;
        result = `${playerScore} : ${computerScore}`
    } else {
        playerScore += 0;
        computerScore += 1;
        result = `${playerScore} : ${computerScore}`
    }
    console.log(result);
    return result;
}



