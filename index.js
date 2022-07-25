let rounds = document.querySelector('.rounds'); // container to hold cards for each round. 
let buttons = document.querySelectorAll('button'); //lets declare a variable to select All buttons
let roundNum = 0; // setting global for roundNum
let computerScore = 0;
let playerScore = 0;
let pScore = document.getElementById('pScore');
let roundN = document.getElementById('roundN');
let cScore = document.getElementById('cScore');

for (num of buttons) {    // loop for each button that gives it an event listener
    num.addEventListener('click', function () {
        let selectVal = this.textContent.toLowerCase(); // allows us to extract button value.
        if (roundNum < 5 && computerScore < 3 && playerScore < 3) {
            // let randNum = computerPlay();
            playRound(selectVal, computerPlay())
        }
        return selectVal;
    });
}

function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3);
    // now we will be adding an if else scenario that will return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
    if (randomNum === 0) {
        return "rock";
    } else if (randomNum === 1) {
        return "paper";
    } else {
        return "scissor";
    }
}

function playRound(selectVal) {
    console.log(roundNum + 1); // what round am I in?
    let playerSelection = selectVal;  // we start off by giving the parameters for who is playing.
    console.log('Player: ' + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1));
    let computerSelection = computerPlay();
    console.log('Computer: ' + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1));


    appendCard(roundNum, playerSelection, computerSelection, outcome());// finally lets increase the round count
    console.log('player score: ' + playerScore); // whats my score?
    console.log('computer score: ' + computerScore); // whats the computer score   
    roundNum++;

    function outcome() {
        if (playerSelection === computerSelection) {  // if scenario -  per card
            console.log("%c- Bummer the round is a TIE!", 'color: yellow; font-size: 10px');
            return "warning";
            // now we will create another scenario where the computer is the winner, and this will return the winner of the round like so: "You Lose! Paper beats Rock"
        } else if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissor" || playerSelection === "scissor" && computerSelection === "rock") {
            computerScore++;
            console.log("%c- You LOSE this round! " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + " beats " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + "!", 'color: red; font-size: 10px');
            return "danger" ;
        } else {     // finally we are adding a scenario where the player wins. 
            playerScore++;
            console.log("%c- You WIN this round", 'color: green; font-size: 10px');
            return "success";
        };
    }

    if (computerScore == 3 || playerScore == 3) {
        if (playerScore > computerScore) {
            console.log('%cYou WON the game!', 'color: green; background: gray; font-size: 18px');
        } else if (playerScore < computerScore) {
            console.log('%cYou LOST the game!', 'color: red; background: gray; font-size: 18px');
        }
    } else if (roundNum == 5) {
        if (playerScore > computerScore) {
            console.log('%cYou WON the game!', 'color: green; background: gray; font-size: 18px');
        } else if (playerScore < computerScore) {
            console.log('%cYou LOST the game!', 'color: red; background: gray; font-size: 18px');
        } else if (playerScore == computerScore) {
            console.log('%cYou tied give it another go!', 'color: yellow; font-size: 18px');
        }
    };
    pScore.textContent = 'User Score: ' + playerScore;
    cScore.textContent = 'PC Score: '+ computerScore;
    roundN.textContent = 'Round: ' + roundNum;

}

function appendCard(a, b, c, d) {
    a1 = `<div class="card-header rHeader">Round: ${a + 1}</div>
    <ul class="list-group list-group-flush mb-2">
        <li class="list-group-item pLi">U: ${b.charAt(0).toUpperCase() + b.slice(1)}</li>
        <li class="list-group-item cLi">PC: ${c.charAt(0).toUpperCase() + c.slice(1)}</li>
        <li class="list-group-item oLi">${d.toUpperCase()}</li>
    </ul>`
    var z = document.createElement('div'); // create cardDiv
    z.classList.add('card','btn',`bg-${d}`, 'shadow', 'cursor-pointer', 'text-center') // classList.add
    z.setAttribute('style', 'width: 10rem'); // set styleAttr
    z.innerHTML = a1; // add card into html
    rounds.appendChild(z); // append new card. 
};
