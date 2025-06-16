// Take an array as an input and returns the average number 
//  Mean


const getMean = (arr) => {
  if (arr.length === 0) 
    return 0;

  const sum = arr.reduce((acc, curr) => acc + curr,0);
  return sum / arr.length;
};


console.log(getMean([1,2,3,4,5]));
console.log(getMean([1,2,3]));
console.log(getMean([1,2]));

