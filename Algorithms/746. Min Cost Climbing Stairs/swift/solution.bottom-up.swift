class Solution {
    func minCostClimbingStairs(_ cost: [Int]) -> Int {
        var downOne: Int = 0
        var downTwo: Int = 0
        for i in 2...cost.count {
            let temp: Int = downOne
            downOne = min(downOne + cost[i - 1], downTwo + cost[i - 2])
            downTwo = temp
        }
        return downOne
    }
}
