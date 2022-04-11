/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function (s) {
    if (s.length === 0) return '';
    else if (s === s.split('').reverse().join('')) return s;
    let start = 0,
        end = 0;
    for (let i = 0; i < s.length; i++) {
        const len1 = expandAroundCenter(s, i, i);
        const len2 = expandAroundCenter(s, i, i + 1);
        const length = Math.max(len1, len2);
        if (length > end - start) {
            start = i - Math.floor((length - 1) / 2);
            end = i + Math.floor(length / 2);
        }
    }
    return s.slice(start, end + 1);
};

const expandAroundCenter = (s, left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return right - left - 1;
};
