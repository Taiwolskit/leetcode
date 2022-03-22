/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let ans = 0;
    const mp = {};
    for (let i = 0, j = 0; j < s.length; j++) {
        if (s[j] in mp) {
            i = Math.max(mp[s[j]], i);
        }
        ans = Math.max(ans, j - i + 1);
        mp[s[j]] = j + 1;
    }
    return ans;
};
