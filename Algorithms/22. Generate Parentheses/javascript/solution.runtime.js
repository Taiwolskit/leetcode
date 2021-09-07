/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const result = [];

    const backtrack = (S = '', left = 0, right = 0) => {
        if (S.length === n * 2) {
            result.push(S);
            return;
        }
        if (n > left) backtrack(`${S}(`, left + 1, right);
        if (left > right) backtrack(`${S})`, left, right + 1);
    };

    backtrack();
    return result;
};
