// NUMBER RANGE GENERATOR

const numbeRange = (a,b) =>{
    let arr = [];
    while(a<=b){
        //console.log(a);
        arr.push(a);
        a++;
    }
    return arr;
};

console.log(numbeRange(0,5));
console.log(numbeRange(25,55));
console.log(numbeRange(0,19));
console.log(numbeRange(-10,10));
console.log(numbeRange(10,99));
