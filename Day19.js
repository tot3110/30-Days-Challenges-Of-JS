// check if a given string starts with a specific substring

const startsWith = (string, substring)=>{
    return string.toLowerCase().startsWith(substring.toLowerCase());
}

console.log(startsWith("Hello world","hello"));
console.log(startsWith("hello world","world"));
