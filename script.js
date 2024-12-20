//Rock Paper Scissors

function getComputerChoice() { //Computer choice
    let x = Math.random();
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

function playRound(humanChoice, computerChoice){
    
    if ((humanChoice == "Rock" && computerChoice == "Rock") || (humanChoice == "Paper" && computerChoice == "Paper" ) || (humanChoice == "Scissors" && computerChoice == "Scissors" )) {
        alert("Computer chose: " + computerChoice );
        alert("It's a draw!");
    }

    else if ((humanChoice == "Rock" && computerChoice == "Paper") || (humanChoice == "Paper" && computerChoice == "Scissors" ) || (humanChoice == "Scissors" && computerChoice == "Rock" )){
        alert("Computer chose: " + computerChoice );
        alert("You lose!") ;
        computerScore = ++computerScore;
    
    }
    else if ((humanChoice == "Rock" && computerChoice == "Scissors") || (humanChoice == "Paper" && computerChoice == "Rock" ) || (humanChoice == "Scissors" && computerChoice == "Paper" )) {
        alert("Computer chose: " + computerChoice );
        alert("You win!") ;
        humanScore = ++humanScore;
    }   

    alert("Your score is: " + humanScore + " The computer score is: " + computerScore);
}

function playGame(){

console.log(playRound(getHumanChoice(), getComputerChoice()));

console.log(playRound(getHumanChoice(), getComputerChoice()));

console.log(playRound(getHumanChoice(), getComputerChoice()));

console.log(playRound(getHumanChoice(), getComputerChoice()));

console.log(playRound(getHumanChoice(), getComputerChoice()));

console.log("Human score: " + humanScore)
console.log("Computer score: " + computerScore)

}

playGame();


if (humanScore > computerScore) {
    alert("Overall: You win!!")
}

else if(humanScore == computerScore) {
    alert("Overall: It's a tie!")
}

else if(humanScore < computerScore) {
    alert("Overall: You lose.")
}
