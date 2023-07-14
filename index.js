let games = 0;
let playerScore = 0;
let computerScore = 0;
let gameNull = 0;
let noGame = 0;

const divResult = document.querySelector("div.result");
const computerSelection = getComputerChoice();
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

function getComputerChoice() {
  let maxValue = 3;
  let minValue = 1;
  let randomValue =
    Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  if (randomValue == 1) {
    return "Rock";
  } else if (randomValue == 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  let lowerCasePlayerSelection = playerSelection.toLowerCase();
  let playerChoice = lowerCasePlayerSelection.replace(
    lowerCasePlayerSelection[0],
    lowerCasePlayerSelection[0].toUpperCase()
  );
  if (
    playerChoice == "Paper" ||
    playerChoice == "Rock" ||
    playerChoice == "Scissors"
  ) {
    if (playerChoice == computerSelection) {
      return `No Winner!, ${computerSelection} = ${playerChoice}`;
    }

    if (playerChoice == "Rock") {
      if (computerSelection == "Scissors") {
        return `You Win! ${playerChoice} beats ${computerSelection}`;
      } else {
        return `You Lose! ${computerSelection} beats ${playerChoice}`;
      }
    } else if (playerChoice == "Paper") {
      if (computerSelection == "Rock") {
        return `You Win! ${playerChoice} beats ${computerSelection}`;
      } else {
        return `You Lose! ${computerSelection} beats ${playerChoice}`;
      }
    } else {
      if (computerSelection == "Paper") {
        return `You Win! ${playerChoice} beats ${computerSelection}`;
      } else {
        return `You Lose! ${computerSelection} beats ${playerChoice}`;
      }
    }
  } else {
    return "Invalid";
  }
}

function game(e) {
  let result = "";

  const computerSelection = getComputerChoice();
  let message = playRound(e.target.innerText, computerSelection);
  let resultMessage = message.slice(0, 8);
  if (resultMessage == "You Win!") {
    playerScore++;
  } else if (resultMessage == "You Lose") {
    computerScore++;
  } else if (resultMessage == "Invalid") {
    noGame++;
  } else {
    gameNull++;
  }
  divResult.innerText = playRound(e.target.innerText, computerSelection);
  games++;

  if (noGame) {
    console.log("You might have spelled the word wrongly");
  } else {
    if (games == 5) {
      if (playerScore > computerScore) {
        result = "You won!";
      } else if (playerScore < computerScore) {
        result = "You lost!";
      } else {
        result = "No winner, Match Null";
      }
      const divScore = document.createElement("div");
      divScore.textContent = `Game Details: wins:${playerScore} , Null = ${gameNull} and loss = ${computerScore} , so ${result}`;
      divResult.append(divScore);

      games = 0;
      playerScore = 0;
      computerScore = 0;
      gameNull = 0;
      noGame = 0;
    }
  }
}

rock.addEventListener("click", game);
paper.addEventListener("click", game);
scissors.addEventListener("click", game);
