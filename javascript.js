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

function getHumanChoice() {
    const btn = document.querySelector("button");
    btn.addEventListener("click", (event) => {
        return event.target.textContent.toLowerCase();
    });
}



function playGame() {

    function playRound(humanChoice, computerChoice) {
    
        // Human win
        if (humanChoice == "rock" && computerChoice == "scissors") {
            console.log("You win! Rock beats Scissors");
            humanScore ++;
            return;
        }
        if (humanChoice == "paper" && computerChoice == "rock") {
            console.log("You win! Paper beats Rock");
            humanScore ++;
            return;
        }
        if (humanChoice == "scissors" && computerChoice == "paper") {
            console.log("You win! Scissors beats Paper");
            humanScore ++;
            return;
        }

        //Computer win
        if (computerChoice == "rock" && humanChoice == "scissors") {
            console.log("You lose! Rock beats Scissors");
            computerScore ++;
            return;
        }
        if (computerChoice == "paper" && humanChoice == "rock") {
            console.log("You lose! Paper beats Rock");
            computerScore ++;
            return;
        }
        if (computerChoice == "scissors" && humanChoice == "paper") {
            console.log("You lose! Scissors beats Paper");
            computerScore ++;
            return;
        }

        // Draw
        console.log("It's a draw!");
    }

    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
    
    if (humanScore > computerScore) {
        console.log("You win!")
        return;
    }
    if (computerScore > humanScore) {
        console.log("You lose!")
        return;
    }
    console.log("It's a draw!")
}

playGame()