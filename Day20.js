// Reverse a string without using any libraries

const reversing = (str) => {
    let reversed = "";

    for(let i = str.length-1; i>=0; i--){
        reversed += str[i];
    }

    return reversed;
}

console.log(reversing("hello"));
console.log(reversing("abdul"));
console.log(reversing("basit"));
console.log(reversing("hen"));
console.log(reversing("lion"));