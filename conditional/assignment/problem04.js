// problem : largest number within three number


let num1 = 40;
let num2 = 10;
let num3 = 30;


let result = num1 > num2 && num1 > num3 ? `largest number is num1 = ${num1}` : num2 > num1 && num2 > num3 ? `largest number is num2 = ${num2}` : `largest number is num3 = ${num3}`;

console.log(result);




// let result = Math.max(num1, num2, num3)

// console.log(`largest number is ${result}`);