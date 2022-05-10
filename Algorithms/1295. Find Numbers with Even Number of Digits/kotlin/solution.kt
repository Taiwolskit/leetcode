class Solution {
    fun findNumbers(nums: IntArray): Int {
        var count: Int = 0
        for (num in nums) {
            if (num.toString().length % 2 == 0) {
                count++
            }
        }
        return count
    }
}