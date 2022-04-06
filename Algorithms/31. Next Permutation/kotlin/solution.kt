class Solution {
    fun nextPermutation(nums: IntArray) {
        var i = nums.size - 2

        while (i >= 0 && nums[i + 1] <= nums[i]) {
            i--
        }

        if (i >= 0) {
            var j = nums.size - 1
            while (j >= 0 && nums[j] <= nums[i]) {
                j--
            }
            swap(nums, i, j)
        }
        reverse(nums, i + 1)
    }

    fun swap(nums: IntArray, i: Int, j: Int) {
        val temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
    }

    fun reverse(nums: IntArray, i: Int) {
        var left = i
        var right = nums.size - 1
        while (left < right) {
            swap(nums, left, right)
            left++
            right--
        }
    }
}
