// Find Min value in an array 

const minValue= (arr) => {
    if(arr.length ===0){
        return "Array is empty"
    }

    return Math.min(...arr);
};



console.log(minValue([2,4,7,9,1]));
console.log(minValue([2,4,1]));
console.log(minValue([9,2]));
console.log(minValue([4,7,9]));
console.log(minValue([]));

