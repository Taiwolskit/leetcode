class Solution {
    fun sortArrayByParityII(nums: IntArray): IntArray {
        val result = IntArray(nums.size)
        var even = 0
        var odd = 1

        for (i in 0 until nums.size) {
            if (nums[i].rem(2) == 0) {
                result[even] = nums[i]
                even += 2
            } else {
                result[odd] = nums[i]
                odd += 2
            }
        }
        return result
    }
}
