function minSum(A) {
  let height = A.length;
  for (let level = height - 2; level >= 0; level--) {
    for (let i = 0; i < A[level].length; i++) {
      A[level][i] += Math.min(A[level+1][i], A[level+1][i + 1]);
    }
  }
  return A[0][0];
}

console.log(minSum([[2], [1, 3], [8, 9, 1], [4, 1, 8, 3]])); // Output: Minimum path sum
