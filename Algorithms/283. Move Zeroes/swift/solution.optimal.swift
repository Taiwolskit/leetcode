class Solution {
    func moveZeroes(_ nums: inout [Int]) {
        var lastNonZeroIndex: Int = 0
        for (i, num) in nums.enumerated() {
            if num != 0 {
                let tmp = nums[lastNonZeroIndex]
                nums[lastNonZeroIndex] = num
                nums[i] = tmp
                lastNonZeroIndex += 1
            }
        }
    }
}