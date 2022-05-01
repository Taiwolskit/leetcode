/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return '';
    return longestPrefix(strs, 0, strs.length - 1);
};

const longestPrefix = (strs, start, end) => {
    if (start === end) return strs[start];
    const mid = Math.floor((start + end) / 2);
    const left = longestPrefix(strs, start, mid);
    const right = longestPrefix(strs, mid + 1, end);
    return commonPrefix(left, right);
};

const commonPrefix = (left, right) => {
    const minLength = Math.min(left.length, right.length);
    for (let i = 0; i < minLength; i++) {
        if (left[i] !== right[i]) {
            return left.substring(0, i);
        }
    }
    return left.substring(0, minLength);
};
