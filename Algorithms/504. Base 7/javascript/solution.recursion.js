/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
    if (num < 0) {
        return '-' + convertToBase7(-num);
    } else if (num < 7) {
        return num.toString();
    }
    return convertToBase7(Math.floor(num / 7)) + (num % 7).toString();
};
