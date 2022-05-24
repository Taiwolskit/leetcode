class Solution {
    fun findMaxConsecutiveOnes(nums: IntArray): Int {
        var longestSequence: Int = 0
        var left: Int = 0
        var right: Int = 0
        var numZeroes: Int = 0

        while (right < nums.size) {
            if (nums[right] == 0) {
                numZeroes++
            }

            while (numZeroes == 2) {
                if (nums[left] == 0) {
                    numZeroes--
                }
                left++
            }

            longestSequence = maxOf(longestSequence, right - left + 1)
            right++
        }

        return longestSequence
    }
}
