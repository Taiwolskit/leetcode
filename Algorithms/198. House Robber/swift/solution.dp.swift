class Solution {
    func rob(_ nums: [Int]) -> Int {
        if nums.count == 0 {
            return 0
        }

        let N: Int = nums.count
        var maxRobbedAmount: [Int] = Array(repeating: 0, count: N + 1)
        maxRobbedAmount[N] = 0
        maxRobbedAmount[N - 1] = nums[N - 1]

        for i: Int in (0..<N - 1).reversed() {
            maxRobbedAmount[i] = max(maxRobbedAmount[i + 1], nums[i] + maxRobbedAmount[i + 2])
        }

        return maxRobbedAmount[0]
    }
}
