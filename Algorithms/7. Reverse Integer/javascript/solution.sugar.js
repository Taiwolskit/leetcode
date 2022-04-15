var reverse = function (x) {
    const isNegative = x < 0 ? -1 : 1;
    const reverseN = Number(
        Math.abs(x).toString().split('').reverse().join('')
    );
    if (reverseN > 0x7fffffff) return 0;
    return reverseN * isNegative || 0;
};
