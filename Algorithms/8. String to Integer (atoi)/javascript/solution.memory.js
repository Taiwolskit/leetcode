/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  const Min = Math.pow(2, 31) * -1;
  const Max = Math.pow(2, 31) - 1;

  const t = str.match(/^\s*?((-|\+)?\d+)/);
  const n = t ? Number(t[0]) : 0;

  return ((n < Min) ? Min : ((n > Max) ? Max : n));
};
