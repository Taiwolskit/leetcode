/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false;
  else if (x < 10) return true;

  const xS = "" + x;
  let back = xS.length - 1;

  for (let i = 0; i < back + 1; i++, back--) {
    if (xS[i] !== xS[back]) {
      return false;
    }
  }

  return true;
};
