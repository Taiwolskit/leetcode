class Solution {
    fun findPairs(nums: IntArray, k: Int): Int {
        var counter = mutableMapOf<Int, Int>()
        for (num in nums) {
            if (!counter.containsKey(num)) {
                counter[num] = 0
            }
            counter[num]?.let { counter[num] = it + 1 }
        }

        var result = 0

        for ((num, count) in counter) {
            if ((k > 0 && counter.containsKey(num + k)) || (k == 0 && count > 1)) {
                result++
            }
        }

        return result
    }
}
