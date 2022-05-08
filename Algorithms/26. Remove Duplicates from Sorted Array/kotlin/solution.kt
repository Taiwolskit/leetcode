class Solution {
    fun removeDuplicates(nums: IntArray): Int {
        var i = 0
        if (nums.size == 0) {
            return i
        }

        for(j in 1 until nums.size) {
            if(nums[j] != nums[i]) {
                nums[++i] = nums[j]
            }
        }

        return i + 1
    }
}
