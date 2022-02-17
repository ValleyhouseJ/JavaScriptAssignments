let inputNum1 = Number(prompt("Enter the first number"));
let inputNum2 = Number(prompt("Enter the second number"));

if (inputNum1 > inputNum2) {
    console.log(inputNum1);
} else if (inputNum1 < inputNum2) {
    console.log(inputNum2);
} else {
    console.log("You did it wrong");
}