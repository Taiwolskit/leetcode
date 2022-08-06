class Solution {
    protected lateinit var memo: MutableMap<Int, Int>

    fun rob(nums: IntArray): Int {
        memo = mutableMapOf()
        return robFrom(0, nums)
    }

    fun robFrom(i: Int, nums: IntArray): Int {
        if (i >= nums.size) return 0
        if (memo[i] != null) return memo[i]!!
        val res = Math.max(robFrom(i + 1, nums), nums[i] + robFrom(i + 2, nums))
        memo[i] = res
        return res
    }
}
