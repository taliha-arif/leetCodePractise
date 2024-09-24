//longest substring without repeating character
var lengthOfLongestSubstring = function(s) {
  let maxLength = 0;
  let left = 0;
  let lastSeen = {};

  for (let right = 0; right < s.length; right++) {
      let c = s.charAt(right);
      if (c in lastSeen && lastSeen[c] >= left) {
          left = lastSeen[c] + 1;
      }
      maxLength = Math.max(maxLength, right - left + 1);
      lastSeen[c] = right;
  }

  return maxLength;     
};

  // Example usage:
  const s = "abcbad";
  console.log(lengthOfLongestSubstring(s)); // Output: 3 ("abc")
  