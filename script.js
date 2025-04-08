


function getComputerChoice(max) {
        return Math.floor(Math.random() * 3)
}

if (getComputerChoice(3) === 0) {
    cpuResult = "rock";

}
else if (getComputerChoice(3) === 1) {
    cpuResult ="paper";
}

else {
    cpuResult ="scissors";
}

console.log(cpuResult);

let getHumanChoice = prompt();
getHumanChoice = getHumanChoice.toLowerCase();

console.log(getHumanChoice)
let humanScore = 0
let computerScore = 0


function playRound(getHumanChoice, getComputerChoice) {  

    if (getHumanChoice === cpuResult) {
        gameResult = "tie"
    }
    
    else if (getHumanChoice === "rock" && cpuResult === "scissors" ||
            getHumanChoice === "paper" && cpuResult === "rock" ||
            getHumanChoice === "scissors" && cpuResult === "paper") {
        gameResult = "you win"; humanScore +=1;
    }
    
    else {
        gameResult ="you lose"; computerScore +=1;
    }
    
    console.log(gameResult);
}

function playGame() {
    for (let game = 0; game < 5; game ++ )
        playRound(prompt(), getComputerChoice())
}

playGame()

console.log(humanScore);
console.log(computerScore);

#da70d6
#333
#f9f9f9
