class Solution {
    func findMiddleIndex(_ nums: [Int]) -> Int {
        var left = 0
        var right = nums.reduce(0, +)
        for (i, val) in nums.enumerated() {
            right -= nums[i]
            if left == right {
                return i
            }
            left += nums[i]
        }
        return -1
    }
}
