/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    const ns = s.length,
        np = p.length;

    if (ns < np) return [];

    const pCount = new Array(26).fill(0),
        sCount = new Array(26).fill(0);

    for (let ch of p) {
        pCount[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    const output = [];
    for (let i = 0; i < ns; i++) {
        sCount[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        if (i >= np) {
            sCount[s[i - np].charCodeAt(0) - 'a'.charCodeAt(0)]--;
        }

        if (sCount.join('') === pCount.join('')) {
            output.push(i - np + 1);
        }
    }

    return output;
};
