/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length === 0) return '';

  let max_len = 1;
  let ans = s[0];

  for (let start = 0, end = 0, expand = 1, n = s.length; start < n; start++) {
    end = start;
    while (end + 1 < n && s[end] === s[end + 1]) {
      end++;
    }

    for (
      expand = 1, max_expand = Math.min(start, n - 1 - end);
      expand <= max_expand;
      expand++
    ) {
      if (s[start - expand] !== s[end + expand]) {
        break;
      }
    }

    const curr_len = end - start + 2 * (expand - 1) + 1;
    ans = curr_len >= max_len ? s.slice(start - expand + 1, end + expand) : ans;
    max_len = Math.max(max_len, curr_len);

    if (max_len === n) {
      break;
    }
  }

  return ans;
};
