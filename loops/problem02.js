// problem : sum of all number 
// input number = [10,20,30,40,50]
// output = 150

let number = [10,20,30,40,50];

let sum = 0;

// for (let i = 0; i < number.length; i++){
//     sum = sum + number[i];
// }
// console.log(sum);

for ( val of number){
    sum += val;
}

console.log(sum);

