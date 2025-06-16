// Function is palindrome or not

const isPalindRome = (str) =>{
    str = str.toLowerCase().replace(/\W/g, "");
    let r_str = str.split("").reverse().join("")
    console.log(r_str);
    return str === r_str ? true : false; 
}

console.log(isPalindRome("A man, A plan, A canal, Panama"));
console.log(isPalindRome("racecar"));
console.log(isPalindRome("hello"));


