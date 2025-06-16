// Sum of Squares in an array 

const sumOfSquares = (arr) =>{
    let total = 0;
    for(let num of arr){
        total += num * num;
    }

    return total;

}

console.log(sumOfSquares([1,2,3,4,5,6,7,8,9,10]));
console.log(sumOfSquares([1,2,3,4]));
console.log(sumOfSquares([99,100]));

