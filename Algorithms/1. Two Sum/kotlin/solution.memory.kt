class Solution {
    fun twoSum(nums: IntArray, target: Int): IntArray {
        for ((index, num) in nums.withIndex()) {
            var diff = target - num

            if (nums.contains(diff) && nums.indexOf(diff) != index) {
                return intArrayOf(nums.indexOf(diff), index)
            }
        }

        return intArrayOf()

    }
}
