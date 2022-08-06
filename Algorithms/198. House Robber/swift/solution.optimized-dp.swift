class Solution {
    func rob(_ nums: [Int]) -> Int {
        if nums.count == 0 {
            return 0
        }

        let N: Int = nums.count
        var robNextPlusOne: Int = 0
        var robNext: Int = nums[N - 1]

        for i: Int in (0..<N - 1).reversed() {
            let current: Int = max(robNext, nums[i] + robNextPlusOne)
            robNextPlusOne = robNext
            robNext = current
        }
        return robNext
    }
}
