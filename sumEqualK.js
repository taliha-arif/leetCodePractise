//Count all sub arrays that has elements sum to a k number.
// Sub array can have more elements than the input array
function findSubarraysWithSumK(arr, K) {
  // Object to store the cumulative sum and the corresponding indices
  let sumMap = {};
  // Initialize sum of elements
  let cumulativeSum = 0;
  // List to store results
  let result = [];

  // Traverse the array
  for (let index = 0; index < arr.length; index++) {
    // Add the current element to the cumulative sum
    cumulativeSum += arr[index];

    // If the cumulative sum equals K, we found a subarray from the start to the current index
    if (cumulativeSum === K) {
      result.push([0, index]);
    }

    // If cumulativeSum - K is found in the sumMap, it means there are subarrays
    // with sum K between the indices stored in sumMap and the current index.
    let targetSum = cumulativeSum - K;
    if (targetSum in sumMap) {
      let startIndices = sumMap[targetSum];
      for (let startIndex of startIndices) {
        result.push([startIndex + 1, index]);
      }
    }

    // Add the current index to the list of indices for this cumulative sum in sumMap
    if (!(cumulativeSum in sumMap)) {
      sumMap[cumulativeSum] = [];
    }
    sumMap[cumulativeSum].push(index);
  }

  console.log(result);
  // Print all subarrays
  if (result.length > 0) {
    console.log(`Subarrays with sum ${K} are:`);
    for (let [start, end] of result) {
      console.log(arr.slice(start, end + 1));
    }
  } else {
    console.log(`No subarrays with sum ${K}`);
  }
}

// Example usage
let arr = [3, 4, -7, 1, 3, 3, 1, -4, -2, -2];
findSubarraysWithSumK(arr, 0);
