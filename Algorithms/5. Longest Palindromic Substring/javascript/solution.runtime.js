/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let result = '';
  const s_len = s.length

  for (let index = 0; index < s_len; index++) {
    let left = index;

    while (index < s_len && s[index] === s[index + 1]) {
      index++;
    }

    let right = index;

    while (left - 1 >= 0 && right + 1 < s_len && s[left - 1] === s[right + 1]) {
      --left;
      ++right;
    }

    if (s.slice(left, right + 1).length > result.length) {
      result = s.slice(left, right + 1);
    }
  }

  return result;
};
