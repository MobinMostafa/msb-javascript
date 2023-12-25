// Problem : check the character is lowercase or uppercase 


const checkCase = (ch) => {

    let result = ch == ch.toLowerCase() ? `The character is lowercase = ${ch}` : `The character is uppercase = ${ch}`;

    return result;
} 

console.log(checkCase("a"));
console.log(checkCase("G"));