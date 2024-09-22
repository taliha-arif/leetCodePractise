//dynamic programming - bottom up
function longestSubstringWithoutRepeating(s) {
    let totalLength = s.length;
    let visited = new Map();
    let maxLength = 0;
    let leftPointer = 0;
  
    for (let rightPointer = 0; rightPointer < totalLength; rightPointer++) {
      if (visited.has(s[rightPointer])) {
        leftPointer = visited.get(s[rightPointer]) + 1;
      }
  
      visited.set(s[rightPointer], rightPointer);
  
      let len = rightPointer - leftPointer + 1;
      maxLength = Math.max(maxLength, len);
    }
  
    return maxLength;
  }
  
  // Example usage:
  const s = "bbbbbb";
  console.log(longestSubstringWithoutRepeating(s)); // Output: 3 ("abc")
  