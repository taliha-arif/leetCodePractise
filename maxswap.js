// Input: num = 2736
// Output: 7236
// Explanation: Swap the number 2 and the number 7.

function maxSwap(num) {
  const digitArray = Array.from(String(num), Number);
  let maxIdx = -1,
    maxDigit = -1;
  let leftIdx = -1,
    rightIdx = -1;

  // Traverse the digits from right to left
  for (let i = digitArray.length - 1; i >= 0; --i) {
    const currentDigit = digitArray[i];

    // Current digit is larger than the maxDigit seen so far
    if (currentDigit > maxDigit) {
      maxDigit = currentDigit;
      maxIdx = i;
      continue;
    }

    // If the current digit is smaller than maxDigit, mark it as a swap candidate
    if (currentDigit < maxDigit) {
      leftIdx = i;
      rightIdx = maxIdx;
    }
  }
  if (leftIdx === -1) {
    return -1;
  }
  [digitArray[leftIdx], digitArray[rightIdx]] = [
    digitArray[rightIdx],
    digitArray[leftIdx],
  ];
  console.log(maxDigit, maxIdx, leftIdx, rightIdx);

  return digitArray;
}

console.log(maxSwap(9876));
