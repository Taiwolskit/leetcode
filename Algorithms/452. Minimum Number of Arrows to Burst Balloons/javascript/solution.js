/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
    if (points.length === 0) return 0;

    points.sort((a, b) => a[1] - b[1]);

    let arrows = 1,
        firstEnd = points[0][1];
    for (let [xStart, xEnd] of points) {
        if (xStart > firstEnd) {
            arrows++;
            firstEnd = xEnd;
        }
    }
    return arrows;
};
