class Solution {
    fun twoCitySchedCost(costs: Array<IntArray>): Int {
        costs.sortWith(compareBy { it[0] - it[1] })

        val n = costs.size / 2
        return costsByDiffs.withIndex().sumBy {
            it.value[ if (it.index < n) 0 else 1 ]
        }
    }
}
