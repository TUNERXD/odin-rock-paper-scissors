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
    return prompt("Your choice: ").toLowerCase();
}


let humanScore = 0;
let computerScore = 0;


