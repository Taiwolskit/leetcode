class Solution {
    fun rob(nums: IntArray): Int {
        if (nums.size == 0) {
            return 0
        }

        val N: Int = nums.size
        var maxRobbedAmount: IntArray = IntArray(N + 1)
        maxRobbedAmount[N] = 0
        maxRobbedAmount[N - 1] = nums[N - 1]
        for (i in N - 2 downTo 0) {
            maxRobbedAmount[i] = Math.max(maxRobbedAmount[i + 1], maxRobbedAmount[i + 2] + nums[i])
        }
        return maxRobbedAmount[0]
    }
}
