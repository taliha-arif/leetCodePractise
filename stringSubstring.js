// Function to find if S1 is a substring of S2
function findSubstring(S1, S2) {
  let s1Length = S1.length;
  let s2Length = S2.length;
  for (let i = 0; i < s1Length; i++) {
    let j;
    for (j = 0; j < s2Length; j++) {
      if (S2[j] !== S1[i + j]) {
        break;
      }
    }
    if (j === s2Length) {
      return i;
    }
  }
  return -1;
}

// Example usage
const S1 = "geeksforgeeks";
const S2 = "for";
const result = findSubstring(S1, S2);

if (result !== -1) {
  console.log(result);
} else {
  console.log(-1);
}
