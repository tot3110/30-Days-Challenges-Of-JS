// Take an array as an input and returns the average number 
//  Median

const getMedian = (arr) => {
  if (arr.length === 0) return 0;

  const sorted = arr.reduce((acc, curr) => {
    let inserted = false;
    for (let i = 0; i < acc.length; i++) {
      if (curr < acc[i]) {
        acc.splice(i, 0, curr); 
        inserted = true;
        break;
      }
    }
    if (!inserted) acc.push(curr);
    return acc;
  }, []);

  const mid = Math.floor(sorted.length / 2);

  if (sorted.length % 2 !== 0) {
    return sorted[mid]; 
  } else {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  }
};


console.log(getMedian([1,2,3,4,5,6]));
