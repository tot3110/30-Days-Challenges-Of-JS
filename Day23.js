// Take an array as an input and returns the average number 
//  Mode

const getMode = (arr) => {
  if (arr.length === 0) return [];

  const frequencyMap = arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  const maxFreq = Math.max(...Object.values(frequencyMap));

  const modes = Object.keys(frequencyMap)
    .filter(key => frequencyMap[key] === maxFreq)
    .map(Number); 

  return modes.length === arr.length ? [] : modes;
};

console.log(getMode([1,2,2,3,4,3]));
console.log(getMode([1,2,3,4]));
console.log(getMode([1,2,2]));
