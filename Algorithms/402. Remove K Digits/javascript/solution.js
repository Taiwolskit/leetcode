/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
    const stack = [];

    for (const digit of num) {
        while (k && stack && stack[stack.length - 1] > digit) {
            stack.pop();
            k--;
        }
        stack.push(digit);
    }

    const finalStack = k ? stack.slice(0, -k) : stack;
    return finalStack.join('').replace(/^0+/, '') || '0';
};
