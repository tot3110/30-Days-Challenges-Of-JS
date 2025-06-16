// RECURSIVE NUMBER RANGE GENERATOR

const numbeRangeRecursive = (a,b, arr=[]) =>{
    if(a<=b){
        arr.push(a);
        return numbeRangeRecursive(a+1, b, arr);
    }
    return arr;
};

console.log(numbeRangeRecursive(0,5));
console.log(numbeRangeRecursive(-5,5));

