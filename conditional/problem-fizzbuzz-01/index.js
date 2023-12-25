// problem FizzBuzz
// take a number 
// if it is divisible by 3 print Fizz
// if it is divisible by 5 print Buzz
// if it is divisible by 3 & 5 , print FizzBuzz
// otherwise print nothing

let number = 45;

if(number % 3 === 0 && number % 5 ===0 ){
    console.log("FizzBuzz");
}
 else if (number % 3 === 0){
    console.log("Fizz");
} else if(number % 5 === 0) {
    console.log("Buzz");
} else{
    console.log("Nothing");
}

