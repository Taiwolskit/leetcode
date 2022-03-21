/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
    const last = {};
    for (let i = 0; i < s.length; i++) {
        last[s[i]] = i;
    }
    let j = 0,
        anchor = -1;
    const ans = [];
    for (let i = 0; i < s.length; i++) {
        j = Math.max(j, last[s[i]]);
        if (i === j) {
            ans.push(i - anchor);
            anchor = i;
        }
    }
    return ans;
};
