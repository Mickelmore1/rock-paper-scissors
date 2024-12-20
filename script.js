//Rock Paper Scissors

function getComputerChoice() { 
    let x = Math.random();
    console.log(x);
    if (x < 0.33) {
        x = "Rock";
    }
    else if (x >= 0.33 && x <= 0.66) {
        x = "Paper";
    } 
    else {
        x = "Scissors"
    }
    return x;
}

function getHumanChoice() {
    let y = prompt("Please enter Rock, Paper of Scissors");
    alert("You have chosen: " + y);
    return y;
}

let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice, roundNumber) {
    
    if (humanChoice == computerChoice) {
        alert("Computer chose: " + computerChoice + "\n \nIt's a draw!" );
       }

    else if ((humanChoice == "Rock" && computerChoice == "Paper") || (humanChoice == "Paper" && computerChoice == "Scissors" ) || (humanChoice == "Scissors" && computerChoice == "Rock" )){
        alert("Computer chose: " + computerChoice + "\n \nYou lose!" );
        computerScore = ++computerScore;
    
    }
    else if ((humanChoice == "Rock" && computerChoice == "Scissors") || (humanChoice == "Paper" && computerChoice == "Rock" ) || (humanChoice == "Scissors" && computerChoice == "Paper" )) {
        alert("Computer chose: " + computerChoice + "\n \nYou win!" ); 
        humanScore = ++humanScore;
    }   

    alert("Round: " + roundNumber + "\n \nYour score is: " + humanScore + "\nThe computer score is: " + computerScore);
    console.log("Round Number: " + roundNumber)
    console.log("Human score: " + humanScore)
    console.log("Computer score: " + computerScore)
}

function playGame() {
    console.log(playRound(getHumanChoice(), getComputerChoice(), 1));
    console.log(playRound(getHumanChoice(), getComputerChoice(), 2));
    console.log(playRound(getHumanChoice(), getComputerChoice(), 3));
    console.log(playRound(getHumanChoice(), getComputerChoice(), 4));
    console.log(playRound(getHumanChoice(), getComputerChoice(), 5));

    if (humanScore > computerScore) {
        alert("Overall: You win!!")
    }
    else if(humanScore == computerScore) {
        alert("Overall: It's a tie!")
    }
    else if(humanScore < computerScore) {
        alert("Overall: You lose.")
    }
}

playGame();
