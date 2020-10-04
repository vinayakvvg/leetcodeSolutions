// Given a binary array, find the maximum number of consecutive 1s in this array.

// Input: [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s.
//     The maximum number of consecutive 1s is 3.

// ----------------------------

// My Solution

var findMaxConsecutiveOnes = function (nums) {
  let l = nums.length,
    c = 0,
    max = 0;
  for (let i = 0; i < l; i++) {
    if (nums[i] == 1) {
      c++;
    } else {
      if (c > max) {
        max = c;
      }
      c = 0;
    }
  }
  return c > max ? c : max;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
// ----------------------------
// Optimized Solution

var optimisedFunction = function (nums) {
  let count = 0,
    maxCount = 0;
  for (let i of nums) {
    if (i == 0) {
      maxCount = Math.max(maxCount, count);
      count = 0;
    } else {
      count++;
    }
  }

  maxCount = Math.max(maxCount, count);
  return maxCount;
};

console.log(optimisedFunction([1, 1, 0, 1, 1, 1]));
