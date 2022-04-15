/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const isNeg = 0 > x ? -1 : 1;
    let rev = 0;
    let absx = Math.abs(x);
    while (absx > 0) {
        rev = rev * 10 + (absx % 10);
        absx = Math.floor(absx / 10);
        if (rev > Math.pow(2, 31) - 1) return 0;
    }
    return rev * isNeg;
};
