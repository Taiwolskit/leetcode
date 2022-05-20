class Solution {
    fun sortArrayByParity(nums: IntArray): IntArray {
        return nums.filter { it % 2 == 0 }.toIntArray().plus(nums.filter { it % 2 == 1 })
    }
}
