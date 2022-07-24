/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    const ans = [];

    for (let num = 1; num <= n; num++) {
        if (num % 15 === 0) {
            ans.push('FizzBuzz');
        } else if (num % 3 === 0) {
            ans.push('Fizz');
        } else if (num % 5 === 0) {
            ans.push('Buzz');
        } else {
            ans.push(num.toString());
        }
    }
    return ans;
};
