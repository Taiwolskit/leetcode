/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function (s, shifts) {
    let shiftAmount = 0;
    const ans = s.split('');
    for (let i = shifts.length - 1; i >= 0; i--) {
        shiftAmount = (shiftAmount + shifts[i]) % 26;
        let letterVal = s[i].charCodeAt(0);
        if (letterVal + shiftAmount > 122) letterVal -= 26;

        ans[i] = String.fromCharCode(letterVal + shiftAmount);
    }

    return ans.join('');
};
