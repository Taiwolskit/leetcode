class Solution {
    fun twoSum(nums: IntArray, target: Int): IntArray {
        val hash = mutableMapOf<Int, Int>()

        for ((index, num) in nums.withIndex()) {
            if (hash.containsKey(num)) {
                return intArrayOf(hash.getValue(num), index)
            }

            hash[target - num] = index
        }

        return intArrayOf()
    }
}
