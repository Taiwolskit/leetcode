class Solution {
    fun splitArray(nums: IntArray, m: Int): Int {
        var left = 0L
        var right = 0L
        for (num in nums) {
            left = maxOf(left, num.toLong())
            right += num
        }
        var minLargeestSplitSum = 0L

        while (left <= right) {
            val maxSumAllowed = left + (right - left) / 2
            if (minSubArraysRequired(nums, maxSumAllowed) <= m) {
                right = maxSumAllowed - 1
                minLargeestSplitSum = maxSumAllowed
            } else {
                left = maxSumAllowed + 1
            }
        }

        return minLargeestSplitSum.toInt()
    }

    private fun minSubArraysRequired(nums: IntArray, maxSumAllowed: Long): Int {
        var currentSum = 0
        var splitsRequired = 1

        for (num in nums) {
            if (currentSum + num <= maxSumAllowed) {
                currentSum += num
            } else {
                splitsRequired++
                currentSum = num
            }
        }
        return splitsRequired
    }
}
