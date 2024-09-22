// Function to merge arrays
function mergeArrays(a, b, n, m) {
  return new Set(a.concat(b).sort(function (a, b) {
    return a - b;
  }));
}
var a = [1, 3, 5, 7],
  b = [2, 4, 6, 8, 8];
var size = a.length;
var size1 = b.length;

// Function call
console.log(mergeArrays(a, b, size, size1));

// Function to merge arrays: Solution 2 : Merge Sort
function mergeSort(a, b, n, m) {
  let pointerA = 0,
    pointerB = 0,
    pointerResult = 0;
  let result = new Set();
  while (pointerA < n && pointerB < m) {
    if (a[pointerA] < b[pointerB]) {
      result.add(a[[pointerA]]);
      //result[pointerResult] = a[pointerA];
      //pointerResult++;
      pointerA++;
    } else {
      result.add(b[pointerB]);
      //result[pointerResult] = b[pointerB];
      //pointerResult++;
      pointerB++;
    }
  }
  while (pointerA < n) {
    result.add(a[[pointerA]]);
    // result[pointerResult] = a[pointerA];
    // pointerResult++;
    pointerA++;
  }
  while (pointerB < m) {
    result.add(b[pointerB]);
    // result[pointerResult] = b[pointerB];
    // pointerResult++;
    pointerB++;
  }
  return [...result];
}
var arr1 = [1, 3, 5, 7],
  arr2 = [2, 4, 6, 8, 8];
var size1 = a.length;
var size2 = b.length;

// Function call
console.log(mergeSort(arr1, arr2, size1, size2));
