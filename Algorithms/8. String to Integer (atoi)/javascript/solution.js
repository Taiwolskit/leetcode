/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    let result = 0;
    let sign = 1;
    let i = 0;
    let len = s.length;
    while (i < len && s[i] === ' ') {
        i++;
    }
    if (i < len && (s[i] === '-' || s[i] === '+')) {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }
    while (i < len && s[i] >= '0' && s[i] <= '9') {
        result = result * 10 + (s[i] - '0');
        if (result * sign > 2147483647) {
            return 2147483647;
        }
        if (result * sign < -2147483648) {
            return -2147483648;
        }
        i++;
    }
    return result * sign;
};
