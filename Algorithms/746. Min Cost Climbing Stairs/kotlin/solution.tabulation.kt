class Solution {
    fun minCostClimbingStairs(cost: IntArray): Int {
        var minimumCost: IntArray = IntArray(cost.size + 1, { 0 })

        for (i in 2..cost.size) {
            minimumCost[i] =
                    Math.min(minimumCost[i - 1] + cost[i - 1], minimumCost[i - 2] + cost[i - 2])
        }
        return minimumCost[cost.size]
    }
}
