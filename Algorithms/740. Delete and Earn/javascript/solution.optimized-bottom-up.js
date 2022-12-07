/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
    const handler = {
        get: function (target, name) {
            return target.hasOwnProperty(name) ? target[name] : 0;
        },
    };
    const points = new Proxy({}, handler);
    let maxNumber = Math.max(...nums);
    for (const num of nums) {
        points[num] += num;
    }

    let twoBack = 0,
        oneBack = points[1];
    for (let i = 2; i < maxNumber + 1; i++) {
        [twoBack, oneBack] = [oneBack, Math.max(oneBack, twoBack + points[i])];
    }
    return oneBack;
};
