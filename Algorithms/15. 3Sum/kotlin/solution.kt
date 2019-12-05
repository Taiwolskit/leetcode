class Solution {
    fun threeSum(nums: IntArray): List<List<Int>> {
        if (nums.size < 3) return listOf()
        nums.sort()
        val results = ArrayList<List<Int>>()
        
        for (i in 0 until nums.size - 2) {
            if (nums[i] > 0) break
            if (i > 0 && nums[i] == nums[i - 1]) continue
            var j = i + 1
            var k = nums.size - 1
            while (j < k) {
                if (nums[i] + nums[j] + nums[k] == 0) {
                    results.add(listOf(nums[i], nums[j], nums[k]))
                    j++
                    k--
                    while (nums[j] == nums[j - 1] && j < k) j++
                    while (nums[k] == nums[k + 1] && j < k) k--
                } else if (nums[j] + nums[k] + nums[i] < 0) {
                    j++
                }
                else k--
            }
        }
        return results
    }
}