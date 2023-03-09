const fs = require(`fs`);
const path = require('path');

const indexPath = path.join(__dirname, 'index.json');

class User {
    constructor(username, password, age, isActive, date){
    this.username = username;
    this.password = password;
    this.age = age;
    this.isActive = isActive;
    this.date = date;
}
}
const userOne = new User(`Filip123`, `qwerty`, 33, `Yes`, `12.3.2021`)
const userTwo = new User(`Mihajlovski123`, `12345`, 23, `No`, `15.1.2011`)
const userThree = new User(`Bombash`, `zxcvb`, 12, `No`, `21.2.2027`)
const userFour = new User(`Simple`, `password`, 45, `Yes`, `30.7.2001`)
const userFive = new User(`Kamikaza`, `password1234`, 17, `Yes`, `02.4.1998`)
const userSix = new User(`Ljupco321`, `qwerty123`, 65, `No`, `06.8.1993`)
const userSeven = new User(`Stefani123`, `123456789`, 54, `Yes`, `28.7.2005`)
const userEight = new User(`Bazuka`, `asdfghj`, 51, `No`, `23.6.2031`)
const userNine = new User(`Bobobo`, `p@ssw0rd`, 24, `Yes`, `12.3.2102`)
const userTen = new User(`FASdas`, `0987654321`, 47, `Yes`, `17.6.1989`)

fs.writeFileSync(indexPath, JSON.stringify([userOne, userTwo,userThree,userFour,userFive,userSix,userSeven,userEight,userNine,userTen]));