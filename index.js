const playerSelection = "scisSors";
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
        return "Player Selection is invalid";
    }
  }

  function game(){
    for(let i = 1;  i <= 5; i++){
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
  }
   
game();

