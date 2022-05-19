class Solution {
    fun moveZeroes(nums: IntArray): Unit {
        var lastNonZeroFoundAt = 0

        for (num in nums) {
            if (num != 0) {
                nums[lastNonZeroFoundAt++] = num
            }
        }

        for (i in lastNonZeroFoundAt until nums.size) {
            nums[i] = 0
        }
    }
}
