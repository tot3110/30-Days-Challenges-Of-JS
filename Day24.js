// Find th mode in an array 
//Mode

function findMode(arr) {
  const freq = {};          
  let maxFreq = 0;           

  for (let num of arr) {
    if (freq[num]) {
      freq[num]++;
    } else {
      freq[num] = 1;
    }

    if (freq[num] > maxFreq) {
      maxFreq = freq[num];
    }
  }

  const modes = [];
  for (let key in freq) {
    if (freq[key] === maxFreq) {
      modes.push(Number(key)); 
    }
  }
  return modes;
}

console.log(findMode([1,1,2,3,4,5,5,2,8,7,5,9]));
