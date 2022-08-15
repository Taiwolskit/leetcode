/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    const minimumCost = new Array(cost.length + 1).fill(0);
    for (let i = 2; i <= cost.length; i++) {
        minimumCost[i] = Math.min(minimumCost[i - 1] + cost[i - 1], minimumCost[i - 2] + cost[i - 2]);
    }
    return minimumCost[cost.length];
};
