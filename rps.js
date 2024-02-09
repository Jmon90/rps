console.log("Hello World!");

// Function to choose rock paper or scissors
function getComputerChoice(cchoice) {
    // gets random index value
const randomItem = Math.floor(Math.random() * cchoice.length);
// gets random item
const item = cchoice[randomItem];

return item;
}

const array = ['Rock', 'Paper', 'Scissors'];
const result = getComputerChoice(array);


console.log(result);

function playGame(){






function playRound(playerSelection, computerSelection) {
    // your code here!
  }
  
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  



}

