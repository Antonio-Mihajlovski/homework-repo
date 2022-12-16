function convertingYears (dogYear, humanYear){
    let resultForDog = dogYear * 7;
    let resultForHuman = humanYear / 7;
    return (`Your dog in dog years is ${resultForDog}, and the human is ${resultForHuman}`);
}

console.log(convertingYears(10 , 70));