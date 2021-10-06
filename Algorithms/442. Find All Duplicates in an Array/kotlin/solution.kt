class Solution {
    fun findDuplicates(nums: IntArray): List<Int> {
        val seen = mutableSetOf<Int>()
        val result = mutableListOf<Int>()

        for (number in nums) {
            if (seen.contains(number)) {
                result.add(number)
            } else {
                seen.add(number)
            }
        }

        return result
    }
}
