class Solution {
    fun fourSum(nums: IntArray, target: Int): List<List<Int>> {
        val size = nums.size
        if (size < 4) return listOf()
        nums.sort()
        val result = ArrayList<List<Int>>()
        
        for (i in 0 until size - 3) {
            if (nums[i] + nums[i+1] + nums[i+2] + nums[i+3] > target) return result
            if (nums[i] + nums[size - 3] + nums[size - 2] + nums[size - 1] < target) continue
            if (i > 0 && nums[i] == nums[i-1]) continue
            for (j in i+1 until size - 2) {
                if (nums[i] + nums[j] + nums[j+1] + nums[j+2] > target) break
                if (nums[i] + nums[j] + nums[size - 2] + nums[size - 1] < target) continue
                if (j > i+1 && nums[j] == nums[j-1]) continue
                var start = j + 1
                var end = size - 1
                while (start < end) {
                    val curr = nums[i] + nums[j] + nums[start] + nums[end]
                    if (curr == target) {
                        result.add(listOf(nums[i], nums[j], nums[start], nums[end]))
                        start++
                        end--
                        while (start < end && nums[start] == nums[start - 1]) start++
                        while (start < end && nums[end] == nums[end + 1]) end--
                    } else if (curr < target) start++
                    else end--
                }
            }
        }
        return result
    }
}