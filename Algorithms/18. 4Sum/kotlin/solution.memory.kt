class Solution {
    fun fourSum(nums: IntArray, target: Int): List<List<Int>> {
        nums.sort()
        val end = nums.size-1
        var i = 0
        var j = i+1
        var k = j+1
        var l = end
        var list = ArrayList<List<Int>>()
        
        while (i < end-2) {
            while (j < end-1) {
                while (k < l) {
                    val sum = nums[i] + nums[j] + nums[k] + nums[l]
                    if (sum == target) {
                        if (!list.contains(listOf(nums[i],nums[j],nums[k],nums[l]))) {
                            list.add(listOf(nums[i], nums[j], nums[k], nums[l]))
                        }
                        k++
                    } else if (sum < target) {
                        k++
                    } else if (sum > target) {
                        l--
                    }
                }
                j++
                k = j+1
                l = end
            }
            i++
            j = i+1
            k = j+1
            l = end
        }
        
        return list
    }
}