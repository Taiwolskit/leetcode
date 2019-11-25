/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  str = str.trim();
  let result = 1;
  if (str[0] === '+' || str[0] === '-') {
    result = str[0] === '-' ? -1 : 1;
    str = str.slice(1);
  }

  let i = 0;
  for (i = 0; i < str.length && !isNaN(parseInt(str[0])); i++);
  if (i === 0) {
    return 0;
  }
  result = result * parseInt(str.slice(0, i));

  const INT_MIN = -2147483648;
  const INT_MAX = Math.pow(2, 31) - 1;
  return result < INT_MIN ? INT_MIN : result > INT_MAX ? INT_MAX : result;
};
