// problem :  a number is divisible by 5 or 11 


let num = 110;

let result = num % 5 === 0 && num % 11 === 0 ? `the number is divisible by 5 and 11 = ${num}` :  num % 5 ===0 ? `the number is divisible by 5 = ${num}` : num % 11 === 0 ? `the number is divisible by 11 = ${num}` : `the number is not divisible by 5 or 11` ;

console.log(result);