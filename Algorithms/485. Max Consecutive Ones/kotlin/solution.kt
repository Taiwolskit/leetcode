class Solution {
    fun findMaxConsecutiveOnes(nums: IntArray): Int {
        var result = 0
        var count = 0

        nums.forEach {
            when (it) {
                1 -> {
                    count++
                    result = Math.max(count, result)
                }
                else -> count = 0
            }
        }

        return result
    }
}
