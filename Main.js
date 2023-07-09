// Declaring my Age
const myAge = 21;

// Declare Early years
let earlyYears = 2;
earlyYears *= 10.5;

// we already accounted for the first two years, take the myAge variable, and subtract 2 from it.
let laterYears = myAge -2;

//calculate the number of dog years accounted for by your later years.
laterYears *= 4;

// getting total age
let myAgeInDogYears = earlyYears+ laterYears;

let myname = 'Xeno';
myname = myname.toLowerCase();

console.log(`My name is ${myname}. I am ${myAge} in human years which is ${myAgeInDogYears} in dog years.`)
