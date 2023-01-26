let arr = [30, 52, 63, 84, 110]
function maxAndMin (numArray){
    let counter = 0;
    let max = numArray[0];
    let min = numArray[0];
    let sum;
    while (counter < numArray.length){
        let currentNumber = numArray[counter];
        if (currentNumber > max){
            max = currentNumber;
        }
        counter++;
    }
    if (counter < numArray.length){
        let currentNumber = numArray[counter];
        if (currentNumber < min){
            min=currentNumber;
        }
        counter++;
    }
    sum = min + max;
    return (`The max number is ${max}.
    And the min number is ${min}
    And the sum of the min and max is ${sum}`);
    
}
console.log(maxAndMin(arr));