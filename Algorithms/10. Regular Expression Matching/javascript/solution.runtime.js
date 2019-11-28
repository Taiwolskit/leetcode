/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  const map = new Map();

  function check(si, pi) {
    if (pi === p.length) return si === s.length;
    const key = `${si}-${pi}`;
    if (map.has(key)) return map.get(key);

    const firstMatch = si < s.length && (p[pi] === s[si] || p[pi] === ".");

    if (pi < p.length - 1 && p[pi + 1] === "*") {
      const res = check(si, pi + 2) || (firstMatch && check(si + 1, pi));
      map.set(key, res);
      return res;
    } else {
      const res = firstMatch && check(si + 1, pi + 1);
      map.set(key, res);
      return res;
    }
  }

  return check(0, 0);
};
