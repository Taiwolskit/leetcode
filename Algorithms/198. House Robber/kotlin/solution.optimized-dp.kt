class Solution {
    fun rob(nums: IntArray): Int {
        if (nums.size == 0) {
            return 0
        }

        val N: Int = nums.size
        var robNext: Int = nums[N - 1]
        var robNextPlusOne: Int = 0
        for (i in N - 2 downTo 0) {
            val current: Int = Math.max(robNext, robNextPlusOne + nums[i])
            robNextPlusOne = robNext
            robNext = current
        }
        return robNext
    }
}
