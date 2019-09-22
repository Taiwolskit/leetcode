class Solution {
    fun twoSum(nums: IntArray, target: Int): IntArray {
        val m = mutableMapOf<Int, Int>()

        for((index, num) in nums.withIndex()) {
            if (m.containsKey(num)) {
                return intArrayOf(m.getValue(num), index)
            }

            m[target - num] = index
        }

        return intArrayOf()
    }
}