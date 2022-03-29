class Solution {
    fun findDuplicate(nums: IntArray): Int {
        val seen: MutableSet<Int> = mutableSetOf()
        for (num in nums) {
            if (seen.contains(num)) {
                return num
            }
            seen.add(num)
        }
        return -1
    }
}
