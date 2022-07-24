/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    const ans = [];

    const fizzBuzzObj = {
        3: 'Fizz',
        5: 'Buzz',
    };
    const divisors = Object.keys(fizzBuzzObj);
    for (let num = 1; num <= n; num++) {
        let numAnsStr = '';
        for (let divisor of divisors) {
            if (num % parseInt(divisor) === 0) {
                numAnsStr += fizzBuzzObj[divisor];
            }
        }
        if (numAnsStr === '') {
            numAnsStr = num.toString();
        }
        ans.push(numAnsStr);
    }
    return ans;
};
