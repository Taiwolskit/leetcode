class Solution {
    fun singleNumber(nums: IntArray): Int {
        var result: Int = 0
        for (i in nums) {
            result = result xor i
        }
        return result
    }
}
