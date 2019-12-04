/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs || !strs.length) return "";
  strs.sort();
  strs = [strs[0], strs[strs.length - 1]];
  for (let a = 0; a <= strs[1].length; a++) {
    if (strs[0][a] !== strs[1][a]) {
      strs[0] = strs[0].slice(0, a);
      break;
    }
  }
  return strs[0];
};
