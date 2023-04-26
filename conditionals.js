
const temperature = -1;

if (temperature < 0) {
  console.log("make sure you wear a scarf");
} else if (temperature < 15) {
  console.log("short sleeves wont cut it");
} else {
  console.log("short sleeves are fine");
}

console.log("now youre ready to go outside");



const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("you are elgible to vote.");
}

if (temperature < -40 || temperature > 40) {
  console.log("maybe going outside isnt a great idea");
}


const raining = false;
if (!raining) {
  console.log("leave your umbrella at home");
}