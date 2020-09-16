/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  let res = Math.trunc(dividend / divisor);
  const max = Math.pow(2, 31) - 1;
  const min = Math.pow(-2, 31);

  if (res > max) {
    return max;
  } else if (res < min) {
    return min;
  }

  return res;
};
