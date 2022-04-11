/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (!s || !s.length) return '';
    const str = `#${s.split('').join('#')}#`;
    const n = str.length;
    let center = 0,
        radius = 0;
    const P = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        if (i > radius) {
            P[i] = 1;
        } else {
            const i_mirror = 2 * center - i > 0 ? 2 * center - i : 0;
            P[i] = Math.min(P[i_mirror], radius - i);
        }
        let lo = i - P[i],
            hi = i + P[i];
        while (lo >= 0 && hi < n && str[lo] === str[hi]) {
            lo--, hi++;
        }
        P[i] = hi - i;

        if (i + P[i] > radius) {
            center = i;
            radius = i + P[i];
        }
    }
    const maxLen = Math.max(...P);
    const centerIndex = P.indexOf(maxLen);
    const res = str.substring(centerIndex - maxLen + 1, centerIndex + maxLen);
    return res.split('#').join('');
};
