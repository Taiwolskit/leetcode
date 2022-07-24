/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    const ans = [];

    for (let num = 1; num <= n; num++) {
        let numAnsStr = '';
        if (num % 3 === 0) {
            numAnsStr += 'Fizz';
        }
        if (num % 5 === 0) {
            numAnsStr += 'Buzz';
        }
        if (numAnsStr === '') {
            numAnsStr = num.toString();
        }
        ans.push(numAnsStr);
    }
    return ans;
};
