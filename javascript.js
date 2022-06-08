// this function is for the computer playing. It will return a random number from 0 < 3;
//the idea is to get options from index [0], up to Max number 3 but not including 3. 

function computerPlay(){
    let randomNum = Math.floor(Math.random()*3);

    // now we will be adding an if else scenario that will return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
        if (randomNum === 0){
            return "rock";
            }
            else if (randomNum === 1){
                return "paper";
            }
            else {
                return "scissor";
            }
        }

const playerSelection = prompt("what do you choose?", "".toLowerCase());
  const computerSelection = computerPlay();
        
// Now we will create a function that plays a single round of Rock Paper Scissors. 
// The function should take two parameters - the playerSelection and computerSelection
// and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

  
function playRound(playerSelection, computerSelection) {
    // your code here!
    if (playerSelection === computerSelection){
        console.log("It's a tie, Bummer!");
    } else if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissor" || playerSelection === "scissor" && computerSelection === "rock"){
        console.log("You LOSE! " + computerSelection + "beats " + playerSelection);
    } else (console.log(" You win!"))
  }
  
  const playerSelection = "rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));