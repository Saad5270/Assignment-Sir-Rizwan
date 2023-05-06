// question 1

let posNum = prompt('Enter a positive number: ');
console.log('number: '+posNum);
console.log('round off value: '+Math.round(posNum));
console.log('floor value: '+Math.floor(posNum));
console.log('ceil value: '+Math.ceil(posNum));

// question 2
let negNum = prompt('Enter a negative number: ');
console.log('number: '+negNum);
console.log('round off value: '+Math.round(negNum));
console.log('floor value: '+Math.floor(negNum));
console.log('ceil value: '+Math.ceil(negNum));

// question 3

let absoluteNum = prompt('Enter a number: ');
console.log('The absolute value of '+absoluteNum+' is '+Math.abs(absoluteNum));

// question 4

let diceVal= Math.floor(Math.random() * 6) + 1;
document.getElementById('diceRoll').innerHTML= diceVal;
    
// question 5

let coinVal= Math.round(Math.random());
if(coinVal==0){
    document.getElementById('coinVal').innerHTML= 'Heads';
}
else{
    document.getElementById('coinVal').innerHTML= 'Tails';

}

// question 6

let randNum = Math.floor(Math.random()*100)+1;
document.getElementById('randNum').innerHTML= randNum;

// question 7

let userWeight= prompt('Enter your weight in kilograms: ')
document.getElementById('userWeight').innerHTML= userWeight;

// question 8

let secrNum = Math.floor(Math.random()*10)+1;
let userSecrNum = +prompt('Enter your number between 1 and 10: ');

if(userSecrNum===secrNum){
    alert('Congratulations');
}
else{
    alert('Try again');
}



