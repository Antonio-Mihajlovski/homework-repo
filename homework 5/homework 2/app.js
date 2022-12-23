let number = document.getElementsByTagName("li");
console.log(number);

let numbers = [1 , 2, 3 ,4 ,5];
number[0].textContent = numbers[0];
number[1].textContent = numbers[1];
number[2].textContent = numbers[2];
number[3].textContent = numbers[3];
number[4].textContent = numbers[4];
number[5].textContent = `${numbers[0]} + ${numbers[1]} + ${numbers[2]} + ${numbers[3]} + ${numbers[4]} = 
${numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4]}  `;