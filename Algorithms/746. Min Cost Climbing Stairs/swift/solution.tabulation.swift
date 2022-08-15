class Solution {
    func minCostClimbingStairs(_ cost: [Int]) -> Int {
        var minimumCost: [Int] = Array(repeating: 0, count: cost.count + 1)
        for i in 2...cost.count {
            let takeOneStep: Int = minimumCost[i - 1] + cost[i - 1]
            let takeTwoSteps: Int = minimumCost[i - 2] + cost[i - 2]
            minimumCost[i] = min(takeOneStep, takeTwoSteps)
        }

        return minimumCost[cost.count]
    }
}
