class Solution {
    fun subsets(nums: IntArray): List<List<Int>> {
        val result = mutableListOf<List<Int>>()
        val max = 1 shl nums.size
        for (i in 0 until max) {
            val list = mutableListOf<Int>()
            for (j in nums.indices) {
                if (i and (1 shl j) != 0) {
                    list.add(nums[j])
                }
            }
            result.add(list)
        }
        return result
    }
}
