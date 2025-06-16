// Remove Duplicate Elements

const removeElements = (arr) =>{
    return new Set(arr);
}


console.log(removeElements([1,2,3,4,5,2,1,6,7,1]));
console.log(removeElements([7,6,8,9,1,3,4,4,4]));
console.log(removeElements([1,2,3,4]));
console.log(removeElements([]));
