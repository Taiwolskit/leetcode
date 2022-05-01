/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return '';
    let low = 1,
        hight = Math.min(...strs.map((el) => el.length));
    while (low <= hight) {
        const mid = Math.floor((low + hight) / 2);
        if (isCommonPrefix(strs, mid)) {
            low = mid + 1;
        } else {
            hight = mid - 1;
        }
    }
    return strs[0].substring(0, (low + hight) / 2);
};

const isCommonPrefix = (strs, len) => {
    const str1 = strs[0].substring(0, len);
    for (let i = 1; i < strs.length; i++) {
        if (strs[i].indexOf(str1) !== 0) {
            return false;
        }
    }
    return true;
};
