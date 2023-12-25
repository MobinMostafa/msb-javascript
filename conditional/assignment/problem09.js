// problem: JavaScript Program to Find if a Character is a Vowel or Consonant


const checkChar = (char) => {
    let ch = char.toLowerCase()
    let result = ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u" ? `The character is a Vowel = ${ch}` : `The character is a Consonant = ${ch}`;

    return result;
} 

console.log(checkChar("B"));
console.log(checkChar("I"));