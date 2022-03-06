let scoreText;
let playerScore = 0;
let computerScore = 0;
let gameScore;
let gameResult;
let roundResult;

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choices.length);
    console.log('Computer chooses ' + (choices[random]));
    return choices[random];
}

function playRound(playerSelection, computerSelection) {
    let match;
    if (computerSelection === "rock") {
        if (playerSelection.toLowerCase() === "rock") {
            console.log(`It\'s a draw`);
            match = "draw";
        } else if (playerSelection.toLowerCase() === "scissors") {
            console.log(`You lose!`);
            match = "lose";
        } else {
        console.log(`You win!`);
        match = "win";
        }
    }

    if (computerSelection === "paper") {
        if (playerSelection.toLowerCase() === "paper") {
            console.log(`It\'s a draw`);
            match = "draw";
        } else if (playerSelection.toLowerCase() === "rock") {
            console.log(`You lose! `);
            match = "lose";
        } else { 
        console.log(`You win!`);
        match = "win";
        }
    }

    if (computerSelection === "scissors") {
        if (playerSelection.toLowerCase() === "scissors") {
            console.log(`It\'s a draw`);
            match = "draw";
        } else if (playerSelection.toLowerCase() === "paper") {
            console.log(`You lose!`);
            match = "lose";
        } else { 
        console.log(`You win!`);
        match = "win";
        }
    }

    return match;
}

for (let i = 1; i <= 100; i++) {
    let playerChoice = prompt("Rock ,paper or scissors?");
    console.log(`Round ${i}`);
    roundResult = playRound(playerChoice.toLowerCase(),computerPlay());
    console.log(countPoints(roundResult));

    if (playerScore == 5 || computerScore == 5) {
        break;
    }
}

function countPoints(result) {    
    if (result === "draw") {
        playerScore += 0;
        computerScore += 0;
        scoreText = `${playerScore} : ${computerScore}`
    } else if (result === "win") {
        playerScore += 1;
        computerScore += 0;
        scoreText = `${playerScore} : ${computerScore}`
    } else {
        playerScore += 0;
        computerScore += 1;
        scoreText = `${playerScore} : ${computerScore}`
    }
    return scoreText;
}

if (playerScore == 5) {
    console.log('Congratulations! You are the winner.');
} else 
    console.log('Computer win. Better luck next time!');