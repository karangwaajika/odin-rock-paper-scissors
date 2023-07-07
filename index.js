function getComputerChoice(){
    let maxValue = 3;
    let minValue = 1;
    let random = Math.floor(Math.random() *(maxValue - minValue + 1)) + minValue;
    return random;
}

console.log(getComputerChoice());