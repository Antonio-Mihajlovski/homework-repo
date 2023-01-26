function convertingYears (dogYear, humanYear){
    let resultForDog = Math.trunc(dogYear * 7);
    let resultForHuman = Math.trunc(humanYear / 7);
    return (`Your dog in dog years is ${resultForDog}, and the human is ${resultForHuman}`);
}

console.log(convertingYears(2 , 2));