const inputArray = [0, 0, 1, 0, 1, 0, 1, 1];
//Solution 1
function moveValuesLeftRight() {
  const len = inputArray.length;
  let zeroCount = 0;
  for (let i = 0; i < len; i++) {
    if (inputArray[i] === 0) {
      zeroCount++;
    }
  }
  console.log(zeroCount);
  for (let i = 0; i < len; i++) {
    if (i < zeroCount) {
      inputArray[i] = 0;
    } else {
      inputArray[i] = 1;
    }
  }
  return inputArray;
}
console.log(moveValuesLeftRight());

//Solution 2

function moveValuesLeftRightSol2(input) {
  let rightPointer = input.length - 1,
    leftPointer = 0;
  while (leftPointer < rightPointer) {
    if (input[leftPointer] === 1 && input[rightPointer] === 0) {
      [input[leftPointer], input[rightPointer]] = [
        input[rightPointer],
        input[leftPointer],
      ];
      leftPointer++;
      rightPointer--;
    } else {
      if (input[leftPointer] === 0) {
        leftPointer++;
      }
      if (input[rightPointer] === 1) {
        rightPointer--;
      }
    }
  }
  return input;
}
console.log(moveValuesLeftRightSol2([ 0, 0, 1, 0, 1, 0, 1, 1, 0]));
