/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    let left = 0,
        right = 0,
        maxLength = 0;

    for (const value of s) {
        if (value == '(') {
            left++;
        } else {
            right++;
        }

        if (left === right) {
            maxLength = Math.max(maxLength, 2 * right);
        } else if (right > left) {
            left = right = 0;
        }
    }

    left = right = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === '(') {
            left++;
        } else {
            right++;
        }

        if (left === right) {
            maxLength = Math.max(maxLength, 2 * left);
        } else if (left > right) {
            left = right = 0;
        }
    }
    return maxLength;
};
