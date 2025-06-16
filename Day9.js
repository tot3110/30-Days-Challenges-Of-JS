// Calculate Average 

const CalculateAveage = (arr) =>{
    let total =  arr.reduce((accum , currElem) => accum + currElem);
    console.log(total);
    return total/arr.length;
}
console.log(CalculateAveage([2,5,7,88]));

