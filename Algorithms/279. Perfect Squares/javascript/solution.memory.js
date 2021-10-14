var numSquares = function (n) {
    const is_square = (num) => Math.trunc(Math.sqrt(num)) ** 2 === num;

    if (is_square(n)) return 1;

    while ((n & 3) === 0) n >>= 2;
    if ((n & 7) === 7) return 4;

    for (let i = 1; i * i <= n; i++) if (is_square(n - i * i)) return 2;
    return 3;
};
