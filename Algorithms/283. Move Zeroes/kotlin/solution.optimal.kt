class Solution {
    fun moveZeroes(nums: IntArray): Unit {
        var lastNonZeroFoundAt: Int = 0
        for (i in nums.indices) {
            if (nums[i] != 0) {
                nums[lastNonZeroFoundAt] = nums[i].also { nums[i] = nums[lastNonZeroFoundAt] }
                lastNonZeroFoundAt++
            }
        }
    }
}
