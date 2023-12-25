// problem: Check character is alphabet, digit or special character

const charCheck = (char) => {
    let ch = char.charCodeAt(0)

    let result = (ch >= 65 && ch <=90) || (ch >=97 && ch <= 122) ? `the character is alphabet ${ch} ` : ch >= 48 && ch <=57 ? `the character is digit ${ch}` : `spacial character is ${ch}`;

    return result;
}

console.log(charCheck("$"))