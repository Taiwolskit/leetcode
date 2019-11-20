/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let longest = '';
  let sub = '';
  for (const c of s) {
    sub = sub.slice(sub.indexOf(c) + 1);
    sub += c;
    longest = sub.length > longest.length ? sub : longest;
  }
  return longest.length;
};
