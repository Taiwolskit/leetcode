/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
    const binary = num.toString(2);
    const ones = binary.split('').filter((x) => x === '1').length;
    return ones + binary.length - 1;
};
