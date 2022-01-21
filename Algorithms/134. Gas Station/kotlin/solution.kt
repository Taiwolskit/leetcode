class Solution {
    fun canCompleteCircuit(gas: IntArray, cost: IntArray): Int {
        var totalTank = 0
        var currTank = 0
        var startingStation = 0

        for (i in gas.indices) {
            totalTank += gas[i] - cost[i]
            currTank += gas[i] - cost[i]

            if (currTank < 0) {
                startingStation = i + 1
                currTank = 0
            }
        }

        if (totalTank >= 0) return startingStation
        return -1
    }
}
