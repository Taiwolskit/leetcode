class Solution {
    fun twoSum(nums: IntArray, target: Int): IntArray {
        val hashmap = mutableMapOf<Int, Int>()

        for ((i: Int, num: Int) in nums.withIndex()) {
            val complement: Int = target - num
            if (hashmap.containsKey(complement)) {
                return intArrayOf(hashmap.getValue(complement), i)
            }

            hashmap[num] = i
        }

        return intArrayOf()
    }
}
