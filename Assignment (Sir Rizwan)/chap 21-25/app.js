// question 1

let firstName = prompt('Enter your first name: ');
let lastName = prompt('Enter your last name: ');
let fName = firstName + ' ' + lastName;

alert('Greetings '+fName);


// question 2

let favPhone = prompt('Enter your favourite phone full name: ');

document.getElementById('favPhone').innerHTML= favPhone;
document.getElementById('strLength').innerHTML= favPhone.length;

// question 3

let stringX= 'Pakistani';

for(let i=0; i<stringX.length; i++){
    if(stringX[i]==='n'){
        document.getElementById('nLength').innerHTML= i;
        
    }
}

// question 4

let str2 = 'Hello World';

for(let i=0; i<str2.length; i++){
    if(str2[i]==='l'){
        document.getElementById('lLength').innerHTML= i;
        
    }
}

// question 5

let str = 'Pakistani';
document.getElementById('indxThree').innerHTML= str[3];

// question 6

let Fname = prompt('Enter your first name: ');
let Lname = prompt('Enter your last name: ');
let fullName = Fname.concat(" ", Lname);

alert('Greetings '+fullName);

// question 7

let city= 'Hyderabad';
document.getElementById('replCity').innerHTML = city.replace('Hyder','Islam');

// question 8

let message = 'Ali and Sami are best friends. They play cricket and football together.';
document.getElementById('replMsg').innerHTML= message.replace(/and/g,'&');

// question 9

let valX= '472';
document.getElementById('typeVal').innerHTML= typeof(valX);

valX= +valX;
document.getElementById('typeVal2').innerHTML= typeof(valX);

// question 10

let userInp = prompt('Input any string: ');
document.getElementById('userInp').innerHTML= userInp;

upperCaseUserInp= userInp.toUpperCase();
document.getElementById('upperCaseInp').innerHTML= upperCaseUserInp;

// question 11

let userInp2 = prompt('Input any string: ');
document.getElementById('userInp2').innerHTML= userInp2;

titleCaseUserInp= userInp2[0].toUpperCase()+userInp2.slice(1);
document.getElementById('titleCaseInp').innerHTML= titleCaseUserInp;

// question 12

let numX = 35.36;
var numXToStr = numX.toString().replace(".", "");
document.getElementById('numXToStr').innerHTML= numXToStr;

// question 13

let userName= prompt('Enter your name: ');
let speChars= ['@','.',',', '!'];
let isValid = true;

for(let i=0; i<userName.length; i++){
    for(let j=0; j<speChars.length; j++){
        if(userName[i]===speChars[j]){
            isValid = false;
            break;
        }      
    }
}

if (isValid) {
    alert('Your username is:v', userName);
  } else {
    alert('Please enter a valid username');
  }

// question 14

let A = ['cake', 'applepie', 'cookie', 'chips', 'patties'];
let userSearch= prompt('Welcome to ABC backery what do you want to order Sir/Ma`am?');

for(let i=0; i<A.length; i++){
    if(A[i].toLowerCase()===userSearch.toLowerCase()){
        document.getElementById('userSearch').innerHTML= userSearch+' is available at index '+[i];
    }
    else{
        document.getElementById('userSearch').innerHTML='We are sorry. '+ userSearch+' is not available';

    }
}

// question 15

let pass = prompt('Enter passwords: ');
document.getElementById('pass').innerHTML= pass;

let isAlphanumeric = true;

for(let i=0; i<pass.length; i++){
    let charCode = pass.charCodeAt(i);
    if (!(charCode >= 48 && charCode <= 57) && 
      !(charCode >= 65 && charCode <= 90) && 
      !(charCode >= 97 && charCode <= 122)) { 
        isAlphanumeric = false;
        if (isAlphanumeric) {
            document.getElementById('answerPass').innerHTML= 'Password is valid\nPlease enter a valid password';
        } 
        else {
            document.getElementById('answerPass').innerHTML= 'Password must contain only alphabets and numbers';
            break;
        }
    }
      
    else if(pass.length<6){
        document.getElementById('answerPass').innerHTML= 'Password should be at least 6 characters long';
        break;
    }

    else if(pass[0]!==(charCode >= 48 && charCode <= 57)){
        document.getElementById('answerPass').innerHTML= 'Password should not have first character as a number';
        break;
    }

    else{
        document.getElementById('answerPass').innerHTML= 'Password is valid\nPlease enter a valid password';
        break;
    }
}


       
// question 16

let university = 'University of Karachi';
let arr = [];

for(let i=0; i<university.length; i++){
    arr.push(university[i]);
}

for(let i=0; i<arr.length; i++){  
    document.getElementById('arrInsert').innerHTML+= arr[i] + "<br>";
}


// question 17

let userInpX= prompt('Input any word: ');
document.getElementById('userInpX').innerHTML= userInpX;
for(let i=0; i<userInpX.length; i++){
    document.getElementById('lastChar').innerHTML= userInpX[i];
}

// question 18

let strNew= 'The quick brown fox jumps over the lazy dog';
count= 0;
let wordThe = strNew.toLowerCase().split(' ');

for(let i=0; i<strNew.length; i++){
    if(wordThe[i] === "the"){
        count++;
    }
}

document.getElementById('counter').innerHTML= count;
console.log(count)