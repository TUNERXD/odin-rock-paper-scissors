function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return "rock"
    }
    if (choice == 1) {
        return "paper"
    }
    return "scissors"
}

function playRound(humanChoice, computerChoice) {

    let resultText = "It's a draw";
    let returnText = "draw";
    // Human win
    if (humanChoice == "rock" && computerChoice == "scissors") {
        resultText = "You win! Rock beats Scissors";
        returnText =  "human";
    }
    if (humanChoice == "paper" && computerChoice == "rock") {
        resultText = "You win! Paper beats Rock";
        returnText =  "human";
    }
    if (humanChoice == "scissors" && computerChoice == "paper") {
        resultText = "You win! Scissors beats Paper";
        returnText =  "human";
    }

    //Computer win
    if (computerChoice == "rock" && humanChoice == "scissors") {
        resultText = "You lose! Rock beats Scissors";
        returnText = "computer";
    }
    if (computerChoice == "paper" && humanChoice == "rock") {
        resultText = "You lose! Paper beats Rock";
        returnText = "computer";
    }
    if (computerChoice == "scissors" && humanChoice == "paper") {
        resultText = "You lose! Scissors beats Paper";
        returnText = "computer";
    }

    const resultLabel = document.querySelector("#result");
    resultLabel.textContent = resultText;
    return returnText;
}

function playGame() {
    const WIN_SCORE = 5;
    let humanScore = 0;
    let computerScore = 0;

    const computerScoreLabel = document.querySelector("#computerScore");
    const humanScoreLabel = document.querySelector("#playerScore");
    const btns = document.querySelectorAll("button");

    btns.forEach(btn => {
        btn.addEventListener("click", (event) => {
            if (humanScore >= WIN_SCORE || computerScore >= WIN_SCORE) {
                return;
            }

            const result = playRound(event.target.textContent.toLowerCase(), getComputerChoice());
            if (result == "human") {
                humanScore++;
            } else if (result == "computer") {
                computerScore++;
            }

            computerScoreLabel.textContent = `Computer score ${computerScore}`;
            humanScoreLabel.textContent = `Player score ${humanScore}`;

            if (humanScore == WIN_SCORE || computerScore == WIN_SCORE) {
                const container = document.querySelector("body");
                const winner = document.createElement("div");
                if (humanScore > computerScore) {
                    winner.textContent = "You win!";
                }
                else if (computerScore > humanScore) {
                    winner.textContent = "You lose!";
                }
                else {
                    winner.textContent = "It's a draw!";
                }
                container.appendChild(winner)
            }
        });
    }); 
}

playGame()