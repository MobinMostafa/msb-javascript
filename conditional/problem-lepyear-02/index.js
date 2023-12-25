// problem:  check a year is leap year or not
// pick a year
// 1. if a year is divisible by 400, then it is leap year
// 2. if the year is divisible by 4 and not divisible 100 , it is a leap year
// 3. otherwise, the year is not leap year


let year = 2000;

if(year % 4 ===0 && year % 100 !== 0){
    console.log("it is a leap year")
}
else if (year % 400 === 0){
   console.log("the year is a leap year");
}
else{
    console.log("it is not leap year")
}

