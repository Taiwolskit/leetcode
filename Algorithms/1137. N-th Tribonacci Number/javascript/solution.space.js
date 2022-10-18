/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
    if (n < 3) {
        return n === 0 ? 0 : 1;
    }

    let x = 0,
        y = 1,
        z = 1;
    for (let i = 3; i <= n; i++) {
        [x, y, z] = [y, z, x + y + z];
    }
    return z;
};
