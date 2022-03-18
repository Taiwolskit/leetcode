class Solution {
    fun twoSum(nums: IntArray, target: Int): IntArray {
        val hash = mutableMapOf<Int, Int>()

        for ((index, num) in nums.withIndex()) {
            var diff = target - num
            if (hash.containsKey(diff)) {
                return intArrayOf(hash.getValue(diff), index)
            }

            hash[num] = index
        }

        return intArrayOf()
    }
}
