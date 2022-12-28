let number = document.getElementById("content");
let sumOfAll = document.getElementById("sum");

let numbers = [1 , 2, 3 ,4 ,5];
function printGrades (array){
    let num = "";
    number.innerHTML = "";
    let sum = 0;
    liContent = "";
    
    for (let i = 0;i < numbers.length; i++){
        liContent += `<li>${array[i]}</li>`
        sum += array[i];
        if (i === array.length - 1){
            num += array[i] + " =";
        } else {
            num += array[i] + " + ";
        }
    }
    content.innerHTML += `<ul> ${liContent} </ul>`;
    sumOfAll.innerHTML += `${num} ${sum}`
}
printGrades(numbers);