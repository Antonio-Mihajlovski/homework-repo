function atm (){
    let availableCash = 10000;
    let withdrawnMoney = prompt("Enter the money u want to withdrawn")
    let moneyLeft ;
    if (withdrawnMoney > availableCash){
    return (`Not enough money`);
}
else {
    let moneyLeft = availableCash - withdrawnMoney;
    return(`Your balance is ${moneyLeft} and u have withdrawn ${withdrawnMoney}`)
}
}

console.log(atm());