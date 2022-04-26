class Solution {
    fun findMiddleIndex(nums: IntArray): Int {
        var left = 0
        var right = nums.sum()
        for ((i, value) in nums.withIndex()) {
            right -= value
            if (left == right) {
                return i
            }
            left += value
        }
        return -1
    }
}
