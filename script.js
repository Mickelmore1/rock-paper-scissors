//Rock Paper Scissors

function getComputerChoice() {
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
    return x
}

console.log(getComputerChoice())

function getHumanChoice() {
    let y = prompt("Please enter Rock, Paper of Scissors");
    alert("You have chosen: " + y);
}

console.log(getHumanChoice())

let computerScore = 0;
let humanScore = 0;


