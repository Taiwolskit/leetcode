/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    let c = {};
    for (const ch of s) {
        c[ch] = (c[ch] || 0) + 1;
    }

    for (const ch of t) {
        if (c[ch]) {
            c[ch] = c[ch] - 1;
        } else {
            return ch;
        }
    }
};
