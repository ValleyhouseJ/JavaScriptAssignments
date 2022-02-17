"use strict";

//assignemnt 1
/*
1. Use console.log() to log the value just after the variable has been declared
2.  Use console.log() to log the value right after the value of the variable has been changed. 
3. Tell what it does 
*/
let numOfDaysUntilWeekend = 2;
console.log(numOfDaysUntilWeekend);
numOfDaysUntilWeekend -= 1;
console.log(numOfDaysUntilWeekend);

//assignemnt 2
//Addition to numbers
const tal1 = 22;
const tal2 = 3;
console.log(tal1 + tal2);

//assignemnt 3
//Subtraction to numbers
console.log(tal1 - tal2);

//assignemnt 4
//write two sentences in two variables and connect them together
const sent1 = "pas ";
const sent2 = "på!";
console.log(sent1 + sent2);

//assignemnt 5
//write two variables, one number and one string. add them together
const sent3 = "jeg er ";
const tal3 = tal1 + tal2;
console.log(sent3 + tal3);

//assignemnt 6
//write the answears in the in a comment
let r = 15;
let s = 5;
let t = r + s; //20
let u = r - s; //10
let v = t / u; //2
let x = r * v; //30
let y = s % v; //1

//assignemnt 7
//Why does it not write out? 
let r = 34;
let c = 1;
let x = r - 32 + c;
let y = r++ * 4;
if (x == 30 || y == 2) {
    console.log("yeah you got it");
}
//Vi har en OR gate i vores if, men ingen af inputsene returner true; derfor executer den ikke.

//change a number in a variable, so it prints out the text
let r = 34;
let c = 28;
let x = r - 32 + c;
let y = r++ * 4;
if (x == 30 || y == 2) {
    console.log("yeah you got it");
}
//Her er en løsning

//assignemnt 8
//make two vaiables. One variable must contain a number and the other one must contain a prompt, 
//where the user can enter a number. Match the two number and print out the answer
//TIP: search prompt
const correctNum = 10;
let inputNum = Number(prompt("Please enter the number 10"));
if (inputNum != null) {
    if (inputNum == correctNum) {
        console.log("You did it");
    } else {
        console.log("You got it wrong, idiot");
    }
} else {
    console.error("Not a valid number");
}


//assignment 9
//write these numbers in the console and write the output. Explain what happens
0.1 + 0.2; //0.30000000000000004
0.1 + 0.2 === 0.3; //false
3 - 1 //2
3 + 1 //4
'3' - 1 //2
'3' + 1 //31
'222' - -'111' //333


//assignemnt 10
//Write a JavaScript program to determine whether a given year is a leap year 
// program to check leap year
const year = prompt("Please enter a year to check");
if (((year % 4) == 0) && (((year % 100) != 0) || ((year % 400) == 0))) {
    console.log("This is a leap year");
}
else {
    console.error("This is not a leap year");
}