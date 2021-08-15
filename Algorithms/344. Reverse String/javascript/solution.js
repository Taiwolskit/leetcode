/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    // s.reverse();
    for (let i = 0; i < s.length / 2; i++) {
        let tmp = s[i];
        s[i] = s[s.length - 1 - i];
        s[s.length - 1 - i] = tmp;
    }
};
