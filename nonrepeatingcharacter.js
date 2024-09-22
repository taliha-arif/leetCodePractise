function firstNonRepeating(arr) {
  const frequency = {};
  for (let val of arr) {
    frequency[val] = frequency[val] ? frequency[val] + 1 : 1;
  }
  for (let val of arr) {
    if (frequency[val] === 1) {
        return val;
    }
  }
  return -1;
}

console.log(firstNonRepeating(["a", "b", "c", "a", "b", "d"]));
