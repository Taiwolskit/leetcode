/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return '';

    for (let i = 0; i < strs[0].length; i++) {
        for (const str of strs.slice(1, strs.length)) {
            if (i === str.length || str[i] !== strs[0][i]) {
                return strs[0].substring(0, i);
            }
        }
    }
    return strs[0];
};
