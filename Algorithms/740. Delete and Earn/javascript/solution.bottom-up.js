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

    const maxPoints = new Array(maxNumber + 1).fill(0);
    maxPoints[1] = points[1];

    for (let num = 2; num < maxPoints.length; num++) {
        maxPoints[num] = Math.max(maxPoints[num - 1], maxPoints[num - 2] + points[num]);
    }
    return maxPoints[maxNumber];
};
