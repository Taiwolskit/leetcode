class Solution {
    fun fourSumCount(nums1: IntArray, nums2: IntArray, nums3: IntArray, nums4: IntArray): Int {
        var cnt = 0
        val map = HashMap<Int, Int>()
        for (a in nums1) {
            for (b in nums2) {
                map[a + b] = map.getOrDefault(a + b, 0) + 1
            }
        }
        for (c in nums3) {
            for (d in nums4) {
                cnt += map.getOrDefault(-(c + d), 0)
            }
        }
        return cnt
    }
}
