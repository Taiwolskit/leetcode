/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let result = '';

  for (let index = 0; index < s.length; index++) {
    let left = index;

    while (index < s.length && s[index] === s[index + 1]) {
      index++;
    }
  
    let right = index;

    while (left - 1 >= 0 && right + 1 < s.length && s[left - 1] === s[right + 1]) {
      --left;
      ++right;
    }

    if (s.slice(left, right + 1).length > result.length) {
      result = s.slice(left, right + 1);
    }
  }

  return result;
};