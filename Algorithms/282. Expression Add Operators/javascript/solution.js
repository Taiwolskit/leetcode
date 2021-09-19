/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function (num, target) {
    const result = [];

    const backtrack = function (index, previous, current, path) {
        if (index === num.length && current === target) {
            result.push(path);
            return;
        }

        for (let i = index; i < num.length; i++) {
            if (i !== index && num[index] === '0') break;
            const cur = parseInt(num.substring(index, i + 1));
            if (index === 0) {
                backtrack(i + 1, cur, cur, `${path}${cur}`);
            } else {
                backtrack(i + 1, cur, current + cur, `${path}+${cur}`);
                backtrack(i + 1, -cur, current - cur, `${path}-${cur}`);
                backtrack(
                    i + 1,
                    previous * cur,
                    current - previous + previous * cur,
                    `${path}*${cur}`
                );
            }
        }
    };

    backtrack(0, 0, 0, '');
    return result;
};
