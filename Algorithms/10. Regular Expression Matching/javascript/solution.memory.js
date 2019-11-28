/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

var isMatch = function(s, p) {
  const m = s.length
  const n = p.length
  const cache = Array.from({ length: m + 1 }, () => Array.from({ length: n + 1 }))

  cache[0][0] = true

  for (let i = 1; i < m; i++) {
    cache[i][0] = false
  }

  function _isMatch(ls, lp) {
    if (cache[ls][lp]) {
      return cache[ls][lp]
    }

    const i = m - ls
    const j = n - lp

    if (p[j + 1] !== '*') {
      if (
        (ls === 0 && lp > 0) ||
        (s[i] !== p[j] && p[j] !== '.')
      ) {
        cache[i][j] = false
        return false
      }

      cache[i][j] = _isMatch(ls - 1, lp - 1)
      return cache[i][j]
    }

    for (let k = 0; k <= ls; k++) {
      if (k > 0 && p[j] !== '.' && s[i + k - 1] !== p[j]) {
        cache[i][j] = false
        return false
      }

      if (_isMatch(ls - k, lp - 2)) {
        cache[i][j] = true
        return true
      }
    }

    cache[i][j] = false
    return false
  }

  return _isMatch(m, n)
}