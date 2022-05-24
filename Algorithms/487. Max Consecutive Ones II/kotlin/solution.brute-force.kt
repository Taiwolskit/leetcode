class Solution {
    fun findMaxConsecutiveOnes(nums: IntArray): Int {
        var longestSequence: Int = 0

        for (left in nums.indices) {
            var numZeroes: Int = 0

            for (right in left until nums.size) {
                if (numZeroes == 2) {
                    break
                }
                if (nums[right] == 0) {
                    numZeroes++
                }
                if (numZeroes <= 1) {
                    longestSequence = maxOf(longestSequence, right - left + 1)
                }
            }
        }

        return longestSequence
    }
}
