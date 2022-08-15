class Solution {
    fun minCostClimbingStairs(cost: IntArray): Int {
        var downOne: Int = 0
        var downTwo: Int = 0
        for (i in 2..cost.size) {
            val temp: Int = downOne
            downOne = Math.min(downOne + cost[i - 1], downTwo + cost[i - 2])
            downTwo = temp
        }
        return downOne
    }
}
