/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    const memo = {};

    const minimumCost = (i) => {
        if (i <= 1) return 0;
        if (i in memo) return memo[i];
        return (memo[i] = Math.min(minimumCost(i - 1) + cost[i - 1], minimumCost(i - 2) + cost[i - 2]));
    };
    return minimumCost(cost.length);
};
