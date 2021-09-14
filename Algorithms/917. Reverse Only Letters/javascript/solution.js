/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
    const letters = s.split('').filter((v) => /[a-zA-Z]/.test(v));

    const ans = [];
    for (let i of s) {
        if (/[a-zA-Z]/.test(i)) {
            ans.push(letters.pop());
        } else {
            ans.push(i);
        }
    }
    return ans.join('');
};
