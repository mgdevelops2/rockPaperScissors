// this function is for the computer playing. It will return a random number from 0 < 3;
//the idea is to get options from index [0], up to Max number 3 but not including 3. 

function computerPlay(){
    let randomNum = Math.floor(Math.random()*3);
    console.log("computer plays: " + randomNum);

    // now we will be adding an if scenario that will return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
        if (randomNum === 0){
            console.log("rock");
            }

            else if (randomNum === 1){
                console.log("paper");
            }
            
            else {
                console.log("scissor");
            }
        }