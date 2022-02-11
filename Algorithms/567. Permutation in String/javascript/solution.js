/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    if (s1.length > s2.length) return false;

    const s1Map = new Array(26).fill(0);
    const s2Map = new Array(26).fill(0);
    for (let i = 0; i < s1.length; i++) {
        s1Map[s1[i].charCodeAt(0) - 97]++;
        s2Map[s2[i].charCodeAt(0) - 97]++;
    }

    let count = 0;
    for (let i = 0; i < 26; i++) {
        if (s1Map[i] === s2Map[i]) {
            count++;
        }
    }

    for (let i = 0; i < s2.length - s1.length; i++) {
        const r = s2[i + s1.length].charCodeAt(0) - 97;
        const l = s2[i].charCodeAt(0) - 97;
        if (count === 26) {
            return true;
        }

        s2Map[r]++;
        if (s1Map[r] === s2Map[r]) {
            count++;
        } else if (s1Map[r] + 1 === s2Map[r]) {
            count--;
        }

        s2Map[l]--;
        if (s1Map[l] === s2Map[l]) {
            count++;
        } else if (s1Map[l] - 1 === s2Map[l]) {
            count--;
        }
    }

    return count === 26;
};
