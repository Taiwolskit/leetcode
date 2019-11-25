/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  const m = Math.pow(2, 31) * -1;
  const M = Math.pow(2, 31) - 1;

  const t = str.match(/^\s*?((-|\+)?\d+)/);
  const n = t ? Number(t[0]) : 0;

  return n < m ? m : n > M ? M : n;
};
