// Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

// Input: [-4,-1,0,3,10]
// Output: [0,1,9,16,100]

// ----------------------------
// My Solution

var sortedSquares = function (A) {
  let len = A.length,
    arr = [],
    up = 0;
  while (up < len && A[up] < 0) up++;
  let low = up - 1;
  while (0 <= low || up < len) {
    let ls = A[low] * A[low],
      us = A[up] * A[up];
    if (isNaN(us) || ls <= us) {
      arr.push(ls);
      low--;
    }
    if (ls > us || isNaN(ls)) {
      arr.push(us);
      up++;
    }
  }
  return arr;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));

// ----------------------------
// Optimised Solution

var optimisedFunction = function (A) {
  var n = A.length;
  var result = new Array(n);
  var i = 0;
  var j = n - 1;

  for (var p = n - 1; p >= 0; p--) {
    if (Math.abs(A[i]) > Math.abs(A[j])) {
      result[p] = A[i] * A[i];
      i++;
    } else {
      result[p] = A[j] * A[j];
      j--;
    }
  }
  return result;
};

console.log(optimisedFunction([-4, -1, 0, 3, 10]));
