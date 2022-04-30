/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    const N = a.length,
        M = b.length;
    let r = '';
    let carry = false;
    for (let i = 0; i < Math.max(N, M); i++) {
        const da = a[N - i - 1] === '1',
            db = b[M - i - 1] === '1';

        const sum = (da !== db) !== carry;
        r += (sum ? '1' : '0');
        carry = (da && carry) || (db && carry) || (da && db);
    }

    return carry ? `1${r}` : r;
};
