class Solution {
    func twoCitySchedCost(_ costs: [[Int]]) -> Int {
        var costs = costs
        costs.sort { $0[0] - $0[1] < $1[0] - $1[1] }
        var total = 0
        let n = costs.count / 2
        for i in 0..<n {
            total += costs[i][0] + costs[i + n][1]
        }
        return total
    }
}
