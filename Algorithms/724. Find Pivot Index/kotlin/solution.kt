class Solution {
    fun pivotIndex(nums: IntArray): Int {
        val sum = nums.sum()
        var leftSum = 0
        for ((i, num) in nums.withIndex()) {
            if (leftSum == (sum - leftSum - num)) {
                return i
            }
            leftSum += num
        }
        return -1
    }
}
