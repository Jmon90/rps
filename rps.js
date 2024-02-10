console.log("Hello World!");

// Function to choose rock paper or scissors
function getComputerChoice(cchoice) {
    const myArray = ['rock', 'paper', 'scissors'];

let randomItem = myArray[Math.floor(Math.random() * myArray.length)];


return randomItem;
}



console.log();
// It Works!!


function playGame(){

   let playerSelection = prompt("Rock, Paper, Scissors").toLowerCase();
console.log(playerSelection);
    if (playerSelection === "rock" && getComputerChoice() === "scissors") {
        alert("You won!");
    }


   else if (playerSelection === "paper" && getComputerChoice() === "rock") {
        alert("You won!");
    }
     

   else if (playerSelection === "scissors" && getComputerChoice() === "paper") {
        alert("You won!");
    }
   
   
    else {
    alert("You lost!");
    }

function playRound(playerSelection, computerSelection) {
    if (playerSelection = computerSelection){
        alert('You Win!')
    }
  }
  
 
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  



}
playGame();
playGame();
playGame();
playGame();
playGame();
