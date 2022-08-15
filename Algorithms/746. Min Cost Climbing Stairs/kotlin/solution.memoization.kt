class Solution {
    fun minCostClimbingStairs(cost: IntArray): Int {
        val memo = mutableMapOf<Int, Int>()

        fun minimumCost(i: Int): Int {
            if (i <= 1) return 0
            if (i in memo) return memo[i]!!
            memo[i] = Math.min(minimumCost(i - 1) + cost[i - 1], minimumCost(i - 2) + cost[i - 2])
            return memo[i]!!
        }

        return minimumCost(i = cost.size)
    }
}
