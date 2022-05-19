class Solution {
    func moveZeroes(_ nums: inout [Int]) {
        var lastNonZeroIndex: Int = 0
        for num in nums {
            if num != 0 {
                nums[lastNonZeroIndex] = num
                lastNonZeroIndex += 1
            }
        }

        while lastNonZeroIndex < nums.count {
            nums[lastNonZeroIndex] = 0
            lastNonZeroIndex += 1
        }
    }
}