function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * choices.length);
    console.log(choices[random]);
}

computerPlay();
