/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    let res = 0;
    const num = Math.floor(Math.sqrt(n));
    if (num * num === n) {
        res = 1;
    } else if (checkNum(n)) {
        res = 4;
    } else {
        for (let i = 1; i <= Math.sqrt(n); i++) {
            const rest = n - i * i;
            const r = Math.floor(Math.sqrt(rest));
            if (r * r === rest) {
                res = 2;
                break;
            }
        }
        if (res === 0) {
            res = 3;
        }
    }
    return res;
};

function checkNum(num) {
    let res = false;
    while (num % 4 === 0) {
        num = num / 4;
    }
    if (num % 8 === 7) {
        res = true;
    }
    return res;
}
