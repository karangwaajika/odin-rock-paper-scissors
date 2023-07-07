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
        return `Player: ${playerChoice} and Computer: ${computerSelection}`;

    }
    else{
        return "Player Selection is invalid";
    }
  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));

