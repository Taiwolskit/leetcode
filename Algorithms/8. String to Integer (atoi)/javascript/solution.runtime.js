/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  str = parseInt(str.trim(), 10);
  const Max = Math.pow(2, 31) - 1;
  const Min = Math.pow(2, 31) * -1;
  if (isNaN(str)) {
    return 0;
  } else if (str < Min) {
    return Min;
  } else if (str > Max) {
    return Max;
  }
  return str;
};
