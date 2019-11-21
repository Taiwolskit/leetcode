/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let maxLength = 1;
  let start = 0;

  for (let i = 1; i < s.length; i++) {
    let low = i - 1;
    let high = i;

    while (low > -1 && high < s.length && s.charAt(low) === s.charAt(high)) {
      if (high - low + 1 > maxLength) {
        maxLength = high - low + 1;
        start = low;
      }
      low -= 1;
      high += 1;
    }

    low = i - 1;
    high = i + 1;
    while (low > -1 && high < s.length && s.charAt(low) === s.charAt(high)) {
      if (high - low + 1 > maxLength) {
        maxLength = high - low + 1;
        start = low;
      }
      low -= 1;
      high += 1;
    }
  }

  return s.substring(start, start + maxLength);
};
