const numbers = [];
numbers[0] = Number(prompt("Enter the first number"));
numbers[1] = Number(prompt("Enter the second number"));
numbers[2] = Number(prompt("Enter the third number"));

numbers.sort(function (a, b) { return a - b });

while (numbers.length > 0) {
    console.log(numbers);
}