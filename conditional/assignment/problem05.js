// problem : find the smallest number in three number

let num1 = 20;
let num2 = 18;
let num3 = 10;

let result = num1 < num2 && num1 < num3 ? `num1 is smallest number = ${num1}` : num2 < num1 && num2 < num3 ? `num2 is smallest number = ${num2}` : `num3 is smallest number = ${num3}`;


console.log(result);


// let result = Math.min(num1, num2, num3);

// console.log(`The smallest number is = ${result}`);