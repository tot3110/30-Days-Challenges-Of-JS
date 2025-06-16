// find maximum number in the array and return the maximum number

const findMaxNum= (arr)=>{
    console.log(...arr);
    return Math.max(...arr);
}

console.log(findMaxNum([1,6,5,7,3,8,]));
console.log(findMaxNum([-1,-6,-5,-7,-3,-8,]));
console.log(findMaxNum([5]));

