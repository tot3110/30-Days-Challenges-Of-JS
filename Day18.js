// function to check a character is uppercase or lowercase

const checkCharacter = (char) =>{ 
    return char === char.toUpperCase() ? "True" : "False"
}


console.log(checkCharacter("A"));
console.log(checkCharacter("i"));
console.log(checkCharacter("L"));
console.log(checkCharacter("z"));
console.log(checkCharacter(""));

