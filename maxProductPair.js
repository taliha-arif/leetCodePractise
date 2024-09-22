function findMaxProductPair(arr) {
  if (arr.length < 2) {
    throw new Error("Array must contain at least two elements");
  }

  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  // The two largest numbers
  const max1 = arr[arr.length - 1];
  const max2 = arr[arr.length - 2];

  // The two smallest numbers
  const min1 = arr[0];
  const min2 = arr[1];

  // Compute the products
  const product1 = max1 * max2;
  const product2 = min1 * min2;

  // Return the maximum product
  if (product1 > product2) {
    return [max1, max2];
  } else {
    return [min1, min2];
  }
}

// Example usage
const inputArray = [1, 10, -5, 1, -100];
const [num1, num2] = findMaxProductPair(inputArray);
console.log(`Numbers with maximum product: ${num1} and ${num2}`);
