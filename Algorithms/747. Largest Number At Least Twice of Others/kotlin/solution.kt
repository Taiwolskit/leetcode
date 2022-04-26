class Solution {
    fun dominantIndex(nums: IntArray): Int {
        if (nums.size == 0) return -1

        var largest = -1
        var secondLargest = -1
        var largestIndex = 0

        for ((i, value) in nums.withIndex()) {
            if (value > largest) {
                secondLargest = largest
                largest = value
                largestIndex = i
            } else if (value > secondLargest) {
                secondLargest = value
            }
        }

        return if (largest >= secondLargest * 2) largestIndex else -1
    }
}
