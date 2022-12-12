let year = prompt("Enter a year");
let formula = (year - 4 ) % 12;

switch (formula) {
  case 0:
    console.log("Ur chinese zodiac is Rat");
    break;
  case 1:
    console.log("Ur chinese zodiac is Ox");
    break;
  case 2:
    console.log("Ur chinese zodiac is Tiger");
    break;
  case 3:
    console.log("Ur chinese zodiac is Rabbit");
    break;
  case 4:
    console.log("Ur chinese zodiac is Dragon");
    break;
  case 5:
    console.log("Ur chinese zodiac is Snake");
    break;
  case 6:
    console.log("Ur chinese zodiac is Horse");
    break;
  case 7:
    console.log("Ur chinese zodiac is Goat");
    break;
  case 8:
    console.log("Ur chinese zodiac is Monkey");
    break;
  case 9:
    console.log("Ur chinese zodiac is Rooster");
    break;
  case 10:
    console.log("Ur chinese zodiac is Dog");
    break;
  case 11:
    console.log("Ur chinese zodiac is Pig");
    break;

  default:
    console.log("You have to enter valid numbers (years)");
}