// problem:  find prime number


let number = 10;

for(let number = 10; number <=20; number++){
    let isPrime = true;
   for (let i = 2; i <= number - 1; i++){
    
    if( number % i === 0){
      isPrime = false;
      break;
    }
} 

if(isPrime){
    console.log(number)
} 

}
