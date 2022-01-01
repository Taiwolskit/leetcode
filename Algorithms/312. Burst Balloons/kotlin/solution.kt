class Solution {
    fun maxCoins(nums: IntArray): Int {
        val nms = IntArray(nums.size + 2){1}
        for(i in 1..nums.size) {
            nms[i] = nums[i-1]
        }

        val dp = Array(nms.size){IntArray(nms.size){0}}
        for(len in 1..nums.size) {
            for(left in 1..nms.size-len-1) {
                var max = 0
                val right = left + len-1
                for(i in left..right) {
                    val lSide = if (i == left) 0 else dp[left][i-1]
                    val rSide = if (i == right) 0 else dp[i+1][right]
                    max = Math.max(max, lSide + rSide + nms[left-1]*nms[i]*nms[right+1])
                }

                dp[left][left+len-1] = max
            }
        }

        return dp[1][nums.size]
    }
}
