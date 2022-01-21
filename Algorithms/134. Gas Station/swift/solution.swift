class Solution {
    func canCompleteCircuit(_ gas: [Int], _ cost: [Int]) -> Int {
        var startStation = 0
        var totalTank = 0
        var currTank = 0
        for i in 0..<gas.count {
            totalTank += gas[i] - cost[i]
            currTank += gas[i] - cost[i]
            if currTank < 0 {
                startStation = i + 1
                currTank = 0
            }
        }
        return totalTank >= 0 ? startStation : -1
    }
}
