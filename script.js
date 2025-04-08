
let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices [Math.floor(Math.random() * 3)];
}

function playRound(playerSelection) {  
    const computerSelection = getComputerChoice();
    let resultText = "";
    
    if (playerSelection === computerSelection) {
        resultText = "It's a tie! You both selected " + playerSelection + "!";
    }
    
    else if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper")
        {
        humanScore++;
        resultText = "You Win! " + playerSelection + " beats " + computerSelection + "!";
    }
        
    else {
        computerScore++
        resultText = "You Lose! " + computerSelection + " beats " + playerSelection + "!";
    } 
    document.getElementById("result").textContent = resultText;

    document.getElementById("score").textContent = "Score — You: " + humanScore
    + ", Computer: " + computerScore;

if (humanScore === 5) {
    document.getElementById("result").textContent = "You reached 5 points! You win the entire game!";
    disableButtons();
    document.getElementById("play-again").style.display = "inline-block";
}
else if (computerScore === 5) {
    document.getElementById("result").textContent = "The computer reached 5 points... You completely lose the game... :(";
    disableButtons();
    document.getElementById("play-again").style.display = "inline-block";
}
}
    
console.log("Final Score — You: " + humanScore + ", " + "Computer: " + computerScore);

//playGame();
document.getElementById("rock").addEventListener("click", () => {
    playRound("rock");
});

document.getElementById("paper").addEventListener("click", () => {
    playRound("paper");   
});

document.getElementById("scissors").addEventListener("click", () => {
    playRound("scissors");
});


function disableButtons() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}

document.getElementById("play-again").addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;

    document.getElementById("result").textContent = "New game! You can do it:";
    document.getElementById("score").textContent = "Score — You: 0, Computer: 0";

    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;

    document.getElementById("play-again").style.display = "none";
});

/*
function playGame() {
    
    for (let game = 0; game < 5; game ++) {
        const playerChoice = prompt ("Rock, paper, or scissors");
        const computerChoice = getComputerChoice();
        console.log(`Computer choice: ${computerChoice}`);
        
        const result = playRound(playerChoice, computerChoice);
        
        if (result === "player") {
            
        } else if (result === "computer") {
            computerScore++;
        }
}
*/