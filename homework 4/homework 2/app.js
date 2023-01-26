let arr = [12, 3, 4, 15, 6];
function sum() { 
    let sum = 0; 
    for (let i = 0; i < arr.length; i++) 
        sum += arr[i]; 

    return sum; 
} 
console.log("Sum of given array is " + sum(arr));