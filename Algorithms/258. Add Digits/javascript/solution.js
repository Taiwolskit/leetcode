/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    return num ? (num - 1) % 9 + 1 : 0;
};
