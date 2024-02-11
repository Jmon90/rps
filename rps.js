console.log("RPS! Go!");

let choices = ['rock', 'paper', 'scissors'];

// Function to choose rock paper or scissors

function getComputerChoice() {

return choices[(Math.floor(Math.random() * choices.length))];
}
getComputerChoice();
const computerSelection = getComputerChoice();





let guess = 0;
let cguess = 0;


function playGame(){
    let playerSelection = prompt("Rock, Paper, Scissors").toLowerCase();
    console.log(playerSelection);



function playRound(playerSelection, computerSelection) {


    
if (playerSelection === computerSelection){
    alert('Tie!');
    console.log(computerSelection);
}

else if (playerSelection === "rock" && computerSelection === "scissors") {
    alert("You won! Rock beats scissors!");
    console.log(computerSelection);

    guess += 1;
}


else if (playerSelection === "paper" && computerSelection === "rock") {
    alert("You won! Paper beats rock!");
    console.log(computerSelection);
    guess += 1;
}
 

else if (playerSelection === "scissors" && computerSelection === "paper") {
    alert("You won! Scissors beats paper!");
    console.log(computerSelection);
    guess += 1;
}


else {
alert("You lost!");
console.log(computerSelection);
cguess += 1;
}
  }
  

  console.log(playRound(playerSelection, computerSelection));




}
playGame();
playGame();
playGame();
playGame();
playGame();

console.log('Score You: ' + guess + ' Computer: ' + cguess);
