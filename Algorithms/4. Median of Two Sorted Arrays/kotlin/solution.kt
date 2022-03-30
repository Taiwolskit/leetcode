import kotlin.math.max
import kotlin.math.min

class Solution {
    fun findMedianSortedArrays(nums1: IntArray, nums2: IntArray): Double {
        if (nums1.isEmpty()) return findMedianSortedArray(nums2)
        if (nums2.isEmpty()) return findMedianSortedArray(nums1)
        return if (nums1.size <= nums2.size) findMedianSortedArraysNonEmpty(nums1, nums2)
        else findMedianSortedArraysNonEmpty(nums2, nums1)
    }

    /**
     * Finds median of two non-empty sorted arrays. Size of [nums1] must be less or equal to size of
     * [nums2]
     */
    private fun findMedianSortedArraysNonEmpty(nums1: IntArray, nums2: IntArray): Double {
        val size = nums1.size + nums2.size
        val half = size / 2
        var left = 0
        var right = nums1.size

        while (left <= right) {
            val m1 = left + (right - left) / 2
            val m2 = half - m1

            val n1Left = if (m1 > 0) nums1[m1 - 1] else Int.MIN_VALUE
            val n1Right = if (m1 < nums1.size) nums1[m1] else Int.MAX_VALUE
            val n2Left = if (m2 > 0) nums2[m2 - 1] else Int.MIN_VALUE
            val n2Right = if (m2 < nums2.size) nums2[m2] else Int.MAX_VALUE

            if (n1Left <= n2Right && n2Left <= n1Right)
                    return if (size % 2 == 1) min(n1Right, n2Right).toDouble()
                    else (max(n1Left, n2Left) + min(n1Right, n2Right)) / 2.0
            else if (n1Left > n2Right) right = m1 - 1 else left = m1 + 1
        }

        return 0.0 // should not be reachable
    }

    private fun findMedianSortedArray(nums: IntArray): Double {
        val mid = nums.size / 2
        return if (nums.size % 2 == 1) nums[mid].toDouble() else (nums[mid - 1] + nums[mid]) / 2.0
    }
}
