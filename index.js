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

console.log(getComputerChoice());