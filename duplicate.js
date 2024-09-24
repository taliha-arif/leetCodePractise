// Given an integer array nums of length n where all the integers of nums are in the range [1, n]
//and each integer appears once or twice, return an array of all the integers that appears twice.

// You must write an algorithm that runs in O(n) time and uses only constant auxiliary space,
//excluding the space needed to store the output

function findDuplicates(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const numIndex = Math.abs(arr[i]) - 1;
    console.log(numIndex);
    if (arr[numIndex] < 1) {
      result.push(numIndex + 1); //pushing values which are duplicate
    } else {
      arr[numIndex] = -arr[numIndex];
    }
  }
  console.log(arr);
  return result;
}

console.log(findDuplicates([3, 2, 3, 1, 2]));
