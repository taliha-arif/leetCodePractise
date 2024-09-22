function pairSum(arr) {
  const sortedArray = arr.sort(function (a, b) {
    return a - b;
  });
  let leftPointer = 0,
    rightPointer = sortedArray.length - 1;
  let result = [];

  // Use while loop to adjust pointers
  while (leftPointer < rightPointer) {
    let sum = sortedArray[leftPointer] + sortedArray[rightPointer];

    if (sum === 0) {
      result.push([sortedArray[leftPointer], sortedArray[rightPointer]]);
      leftPointer++;
      rightPointer--;
    } else if (sum > 0) {
      rightPointer--;
    } else {
      leftPointer++;
    }
  }

  return result;
}

console.log(pairSum([1, -2, -1, 2, 3]));
