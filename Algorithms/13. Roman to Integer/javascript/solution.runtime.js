/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const romanMap = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000]
  ]);

  let ans = 0;
  let prev = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    const cur = romanMap.get(s[i]);
    if (cur < prev) {
      ans -= cur;
    } else {
      ans += cur;
    }
    prev = cur;
  }
  return ans;
};
