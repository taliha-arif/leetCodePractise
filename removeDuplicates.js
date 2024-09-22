// Given an integer array nums sorted in non-decreasing order, remove the duplicates
//in-place such that each unique element appears only once. The relative order of the elements
//should be kept the same. Then return the number of unique elements in nums.

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2,
//with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

var removeDuplicates = function (nums) {
  let i = 1,
    j = 1;
  for (j; j < nums.length; j++) {
    if (nums[i - 1] != nums[j]) {
      nums[i] = nums[j];
      i++;
    }
  }
  while (i < nums.length) {
    nums[i] = "_";
    i++;
  }
  return nums;
};

console.log(removeDuplicates([1, 1, 2]));
