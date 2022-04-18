/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
    if (num === 0) return '0';
    let res = '';
    let sign = num < 0 ? '-' : '';
    num = Math.abs(num);
    while (num > 0) {
        res = (num % 7) + res;
        num = Math.floor(num / 7);
    }
    return sign + res;
};
