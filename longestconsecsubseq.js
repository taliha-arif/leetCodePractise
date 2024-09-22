// Javascript program to find longest
// contiguous subsequence

// Returns length of the longest
// contiguous subsequence
function findLongestConseqSubseq(arr, n) {
  let ans = 0;
  const S = new Set();
  for (let i = 0; i < n; i++) {
    S.add(arr[i]);
  }
  for (let i = 0; i < n; i++) {
    if (!S.has(arr[i] - 1)) {
      let j = arr[i];
      while (S.has(j)) j++;
      ans = Math.max(ans, j - arr[i]);
      console.log('ans', ans, j, arr[i], j - arr[i]);
    }
  }
  return ans;
}

// Driver code
let arr = [0, 1, 6, -1];
let n = arr.length;
console.log(
  "Length of the Longest contiguous subsequence is " +
    findLongestConseqSubseq(arr, n)
);
