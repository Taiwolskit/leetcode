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

    return maxPoints(points, maxNumber);
};

const maxPoints = (points, num) => {
    if (num === 0) {
        return num;
    } else if (num === 1) {
        return points[1];
    }

    return Math.max(maxPoints(points, num - 1), maxPoints(points, num - 2) + points[num]);
};
