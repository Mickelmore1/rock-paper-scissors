function getComputerChoice() { 
    let x = Math.random();
    if (x < 0.33) { x = "Rock"; }
    else if (x >= 0.33 && x <= 0.66) { x = "Paper"; } 
    else { x = "Scissors" }
    document.getElementById('computerChoice').textContent = x
    return x;
}

function getHumanChoice(event) {
    if (document.getElementById('humanScore').textContent == 5 || document.getElementById('computerScore').textContent == 5 ){
    } else {
        const buttonPressed = event.target.id;
        document.getElementById('humanChoice').textContent = buttonPressed;
        playRound(buttonPressed, getComputerChoice())
    }
}

function playRound(humanChoice, computerChoice, roundNumber) {
    const computerScore = document.querySelector('#computerScore');
    const humanScore = document.querySelector('#humanScore');
    if ((humanChoice == "Rock" && computerChoice == "Paper") || (humanChoice == "Paper" && computerChoice == "Scissors" ) || (humanChoice == "Scissors" && computerChoice == "Rock" )){
        ++computerScore.textContent;
    }
    if ((humanChoice == "Rock" && computerChoice == "Scissors") || (humanChoice == "Paper" && computerChoice == "Rock" ) || (humanChoice == "Scissors" && computerChoice == "Paper" )){
        ++humanScore.textContent;
    }   
    if (computerScore.textContent == 5) {
        document.getElementById('result').textContent = "Commiserations. Computer wins.";
        document.getElementById('result').appendChild(document.createElement('br'));
        document.getElementById('result').appendChild(document.createElement('br'));
        document.getElementById('result').append("Please restart the game.");
    } 
    if (humanScore.textContent == 5) {
        document.getElementById('result').textContent = "Congratulations! You win!";
        document.getElementById('result').appendChild(document.createElement('br'));
        document.getElementById('result').appendChild(document.createElement('br'));
        document.getElementById('result').append("Please restart the game.");
    }
}

function restartGame() {
    document.getElementById('computerScore').innerText = 0;
    document.getElementById('humanScore').innerText = 0;
    document.getElementById('humanChoice').innerText = "";
    document.getElementById('computerChoice').innerText = "";
    document.getElementById('result').innerText = "";

}

document.querySelector('#Rock').addEventListener('click', getHumanChoice);
document.querySelector('#Paper').addEventListener('click', getHumanChoice);
document.querySelector('#Scissors').addEventListener('click', getHumanChoice);
document.querySelector('#restart').addEventListener('click', restartGame);