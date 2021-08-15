const findIndex = (s, start, end, target) => {
    for (let j = start; j < end; j++) {
        if (s[j] === target) {
            return j;
        }
    }
    return -1;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (!s) return 0;
    let largest = 0,
        start = 0;
    for (let i = 0; i < s.length; i++) {
        start = Math.max(findIndex(s, start, i, s[i]) + 1, start);
        largest = Math.max(i - start + 1, largest);
    }
    return largest;
};
