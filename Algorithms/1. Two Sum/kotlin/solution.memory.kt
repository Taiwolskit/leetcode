class Solution {
    fun twoSum(nums: IntArray, target: Int): IntArray {
        var result = intArrayOf()

        for (i in 0 until nums.size - 1) {
            for (j in (i + 1) until nums.size) {
                if (nums[i] + nums[j] == target) {
                    result = intArrayOf(i, j)
                    break
                }
            }
        }

        return result
    }
}