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

    if ((playerSelection === "rock" && computerSelection === "scissors") 
    || (playerSelection === "scissors" && computerSelection === "paper")
    || (playerSelection === "paper" && computerSelection === "rock")) {
        console.log("You win this round!");
        match = "win";
    } else if (playerSelection === computerSelection) {
        console.log("Draw");
        match = "draw";
    } else {
        console.log("You lose this round.");
        match = "lose";
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
    } else if (result === "lose") {
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