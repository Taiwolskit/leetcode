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
        oneBack = 0;
    const n = points.length;
    if (n + n * Math.log2(n) > maxNumber) {
        oneBack = points[1];
        for (let i = 2; i < maxNumber + 1; i++) {
            [twoBack, oneBack] = [oneBack, Math.max(oneBack, twoBack + points[i])];
        }
    } else {
        const elements = Object.keys(points)
            .map(Number)
            .sort((a, b) => a - b);
        oneBack = points[elements[0]];
        for (let i = 1; i < elements.length; i++) {
            let currentElement = elements[i];
            if (currentElement === elements[i - 1] + 1) {
                [twoBack, oneBack] = [oneBack, Math.max(oneBack, twoBack + points[currentElement])];
            } else {
                [twoBack, oneBack] = [oneBack, oneBack + points[currentElement]];
            }
        }
    }
    return oneBack;
};
