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
    for (const num of nums) {
        points[num] += num;
    }

    const elements = Object.keys(points)
        .map(Number)
        .sort((a, b) => a - b);
    let twoBack = 0,
        oneBack = points[elements[0]];
    for (let i = 1; i < elements.length; i++) {
        let currentElement = elements[i];
        if (currentElement === elements[i - 1] + 1) {
            [twoBack, oneBack] = [oneBack, Math.max(oneBack, twoBack + points[currentElement])];
        } else {
            [twoBack, oneBack] = [oneBack, oneBack + points[currentElement]];
        }
    }

    return oneBack;
};
