class Solution {
    fun threeSumClosest(nums: IntArray, target: Int): Int {
        if (nums.size < 3) {
            throw Exception()
        }

        var closest = nums[0] + nums[1] + nums[2]
        if (closest == target) {
            return target
        } 

        var delta = Math.abs(target - closest)

        for (a in 0 until nums.size - 2) {
            for (b in a + 1 until nums.size -1) {
                for (c in b + 1 until nums.size) {
                    val current = nums[a] + nums[b] + nums[c]
                    val currentDelta = Math.abs(target - current)
                    if (currentDelta < delta) {
                        closest = current
                        delta = currentDelta
                        if (closest == target) {
                            return target
                        } 
                    }
                }
            }
        }

        return closest
    }
}