class Solution {
    fun sortedSquares(nums: IntArray): IntArray {
        val n = nums.size
        val result = IntArray(n)
        var left = 0
        var right = n - 1
        var idx = n - 1

        while (left <= right) {
            val leftSquare = nums[left] * nums[left]
            val rightSquare = nums[right] * nums[right]

            if (leftSquare <= rightSquare) {
                result[idx] = rightSquare
                right--
            } else {
                result[idx] = leftSquare
                left++
            }
            idx--
        }

        return result
    }
}
