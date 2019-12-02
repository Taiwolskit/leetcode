/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let k = 0;
  let s = "";
  const l = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  const d = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  while (num) {
    while (d[k] > num) k++;
    num -= d[k];
    s += l[k];
  }

  return s;
};
