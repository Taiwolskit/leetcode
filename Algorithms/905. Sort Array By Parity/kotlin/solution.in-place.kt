class Solution {
    fun sortArrayByParity(nums: IntArray): IntArray {
        var i = 0
        var j = nums.size - 1
        while (i < j) {
            if (nums[i] % 2 > nums[j] % 2) {
                nums[i] = nums[j].also { nums[j] = nums[i] }
            }
            if (nums[i] % 2 == 0) {
                i++
            }
            if (nums[j] % 2 == 1) {
                j--
            }
        }
        return nums
    }
}
