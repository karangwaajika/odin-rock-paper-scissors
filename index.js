const playerSelection = prompt("Player selection: ");
function getComputerChoice(){
    let maxValue = 3;
    let minValue = 1;
    let randomValue = Math.floor(Math.random() *(maxValue - minValue + 1)) + minValue;
    if (randomValue == 1){
        return "Rock";
    }
    else if (randomValue == 2){
        return "Paper";
    }
    else {
        return "Scissors";
    }
   
}

function playRound(playerSelection, computerSelection) {
    let lowerCasePlayerSelection = playerSelection.toLowerCase();
    let playerChoice = lowerCasePlayerSelection.replace(lowerCasePlayerSelection[0], lowerCasePlayerSelection[0].toUpperCase())
    if (playerChoice == "Paper" || playerChoice == "Rock" || playerChoice == "Scissors"){
        
        if(playerChoice == computerSelection){
            return `No Winner!, ${computerSelection} = ${playerChoice}`;
        }

        if(playerChoice == "Rock"){
            if(computerSelection == "Scissors"){
                return `You Win! ${playerChoice} beats ${computerSelection}`;
            }
            else{
                return `You Lose! ${computerSelection} beats ${playerChoice}`;
            }
        }
        else if(playerChoice == "Paper"){
            if(computerSelection == "Rock"){
                return `You Win! ${playerChoice} beats ${computerSelection}`;
            }
            else{
                return `You Lose! ${computerSelection} beats ${playerChoice}`;
            }
        }
        else{
            if(computerSelection == "Paper"){
                return `You Win! ${playerChoice} beats ${computerSelection}`;
            }
            else{
                return `You Lose! ${computerSelection} beats ${playerChoice}`;
            }
        }

    }
    else{
        return "Invalid";
    }
  }

  function game(){
    let result = "";
    let playerScore = 0;
    let computerScore = 0;
    let gameNull=0;
    let noGame=0;
    for(let i = 1;  i <= 5; i++){
        const computerSelection = getComputerChoice();
        let message = playRound(playerSelection, computerSelection);
        let resultMessage = message.slice(0, 8); 
        if(resultMessage == "You Win!"){
            playerScore ++;
        }
        else if(resultMessage == "You Lose"){
            computerScore ++;
        }
        else if(resultMessage == "Invalid"){
            noGame ++;
        }
        else{
            gameNull ++;
        }
        console.log(playRound(playerSelection, computerSelection));
        
    }
    if(noGame){
        console.log("You might have spelled the word wrongly"); 
    }
    else{
    
        if(playerScore > computerScore){
            result = "You won!";
        }
        else if(playerScore < computerScore){
            result = "You lost!"
        }
        else{
            result = "No winner, Match Null";
        }
        console.log(`Game Details: wins:${playerScore} , Null = ${gameNull} and loss = ${computerScore} , so ${result}`);
    }
  }
   
game();


