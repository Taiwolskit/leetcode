class Solution {
    fun sortColors(nums: IntArray): Unit {
        // for all idx < p0 : nums[idx < p0] = 0
        // curr is an index of element under consideration
        var p0: Int = 0
        var curr: Int = 0
        // for all idx > p2 : nums[idx > p2] = 2
        var p2: Int = nums.size - 1

        while (curr <= p2) {
            when {
                nums[curr] == 0 -> {
                    nums[curr++] = nums[p0]
                    nums[p0++] = 0
                }
                nums[curr] == 2 -> {
                    nums[curr] = nums[p2]
                    nums[p2--] = 2
                }
                else -> {
                    curr++
                }
            }
        }
    }
}
