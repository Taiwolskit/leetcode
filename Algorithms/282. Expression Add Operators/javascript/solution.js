/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function (num, target) {
    const result = [];
    backtrack(result, '', num, target, 0, 0, 0);
    return result;
};

const backtrack = function (result, path, num, target, index, evaluated, multed) {
    if (index === num.length && evaluated === target) {
        result.push(path);
        return;
    }

    for (let i = index; i < num.length; i++) {
        if (i !== index && num[index] === '0') break;
        let cur = parseInt(num.substring(index, i + 1));
        if (index === 0) {
            backtrack(result, path + cur, num, target, i + 1, cur, cur);
        } else {
            backtrack(
                result,
                path + '+' + cur,
                num,
                target,
                i + 1,
                evaluated + cur,
                cur
            );
            backtrack(
                result,
                path + '-' + cur,
                num,
                target,
                i + 1,
                evaluated - cur,
                -cur
            );
            backtrack(
                result,
                path + '*' + cur,
                num,
                target,
                i + 1,
                evaluated - multed + multed * cur,
                multed * cur
            );
        }
    }
};
