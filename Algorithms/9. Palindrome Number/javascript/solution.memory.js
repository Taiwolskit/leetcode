/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false;
  else if (x < 10) return true;

  let revX = 0;
  let tmp = x;
  while (0 < tmp) {
    revX = revX * 10 + (tmp % 10);
    tmp = Math.trunc(tmp / 10);
  }
  return revX === x;
};
