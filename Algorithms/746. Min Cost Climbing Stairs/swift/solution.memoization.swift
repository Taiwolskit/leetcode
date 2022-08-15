class Solution {
    func minCostClimbingStairs(_ cost: [Int]) -> Int {
        func minimumCost(_ i: Int) -> Int {
            guard i > 1 else {
                return 0
            }

            if let val = memo[i] {
                return val
            }

            let downOne: Int = minimumCost(i - 1) + cost[i - 1]
            let downTwo: Int = minimumCost(i - 2) + cost[i - 2]
            memo[i] = min(downOne, downTwo)
            return memo[i]!
        }

        var memo = [Int: Int]()
        return minimumCost(cost.count)
    }
}
