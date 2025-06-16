// Take a number as input and return a sum of its digits

const sumOfDigits = (num) =>{
    let arry = Array.from(String(num), Number)
    console.log(arry);     
    return arry.reduce((accum , currElem) => accum += currElem)

}

console.log(sumOfDigits(1234));
console.log(sumOfDigits(1232654));
console.log(sumOfDigits(1200321));
console.log(sumOfDigits(1000));


