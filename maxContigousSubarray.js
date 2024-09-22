// Function to find the maximum subarray sum
function maxSubarraySum(arr) {
  let maximum = arr[0];
  let result = arr[0];
  for (let i = 0; i < arr.length; i++) {
    maximum = Math.max(arr[i] + maximum, arr[i]);
    result = Math.max(maximum, result);
  }
  return result;
}

const arr = [2, 3, -8, 7, -1, 2, 3];
console.log(maxSubarraySum(arr));
