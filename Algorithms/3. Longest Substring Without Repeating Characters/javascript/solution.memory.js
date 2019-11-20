/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let max = 0;
  let left = 0;
  let right = 0;
  const set = [];

  while (right < s.length) {
    const key = s.charAt(right);
    if (!set.includes(key)) {
      set.push(key);
      right++;
      max = Math.max(max, right - left);
    } else {
      set.shift();
      left++;
    }
  }

  return max;
};
