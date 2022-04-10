/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
    const stack = [];
    for (const op of ops) {
        switch (op) {
            case '+':
                stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
                break;
            case 'C':
                stack.pop();
                break;
            case 'D':
                stack.push(stack[stack.length - 1] * 2);
                break;
            default:
                stack.push(parseInt(op));
                break;
        }
    }

    return stack.reduce((acc, cur) => acc + cur);
};
