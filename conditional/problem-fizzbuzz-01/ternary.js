
let number = 9;
let ternary = number % 3 ===0 && number % 5 ===0 ? "FizzBuzz" : number % 3 ===0 ? "Fizz" : number % 5 ===0 ? "Buzz" : "Nothing";
console.log(ternary);