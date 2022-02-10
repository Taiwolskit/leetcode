class Solution {
    fun subarraySum(nums: IntArray, k: Int): Int {
        var count = 0
        var sum = 0
        val map: HashMap<Int, Int> = hashMapOf(0 to 1)
        for (num in nums) {
            sum += num
            count += map.getOrDefault(sum - k, 0)
            map[sum] = map.getOrDefault(sum, 0) + 1
        }
        return count
    }
}
