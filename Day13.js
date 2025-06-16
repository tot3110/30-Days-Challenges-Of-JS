// Calculate the vowels in the string 

const vowels = (str) =>{
    let vowels = ['a','e','i','o','u']

    let arr = str.split('');
    console.log(arr);

    let count = 0;
    for(let char of arr){
        if(vowels.includes(char.toLowerCase())){
            count++;
        }
    }

    return count;
    
}
console.log(vowels("Hello hoe are you"));
console.log(vowels("Hello boys wassup"));
console.log(vowels("Hello"));
console.log(vowels("i am abdul basit"));
console.log(vowels("Hi"));


