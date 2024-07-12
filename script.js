function getRandomNumber(max,min){
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let min = 1;
let max = 6;
let randomNumber = getRandomNumber(max,min);
console.log(randomNumber);
