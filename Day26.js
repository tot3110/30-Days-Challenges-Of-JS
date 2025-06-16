// FIND FIBONACCI SERIES

const fibonaaciSeries = (num) =>{
    if(num <= 1){
        return num;
    } else {
        return fibonaaciSeries(num-1) + fibonaaciSeries(num-2);
    }
};

console.log(fibonaaciSeries(0));
console.log(fibonaaciSeries(1));
console.log(fibonaaciSeries(2));
console.log(fibonaaciSeries(3));
console.log(fibonaaciSeries(4));
console.log(fibonaaciSeries(5));
console.log(fibonaaciSeries(6));
console.log(fibonaaciSeries(7));
console.log(fibonaaciSeries(8));
