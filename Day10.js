// Two Arrays are equal or not equal

const twoArrayComparison = (arr1,arr2) =>{
    if(arr1.length !== arr2.length){
        return false;
    }

    return arr1.every((currval, index) => currval === arr2[index])
}

console.log(twoArrayComparison([1,2,3], [1,2,3]));
console.log(twoArrayComparison([1,2,3], [1,2,4]));
console.log(twoArrayComparison([], []));

