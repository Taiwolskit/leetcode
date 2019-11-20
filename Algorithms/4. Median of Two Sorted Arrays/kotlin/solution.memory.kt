class Solution {
    fun findMedianSortedArrays(nums1: IntArray, nums2: IntArray): Double {
        val totalLength = nums1.size + nums2.size
        return if (totalLength % 2 == 1) findKthElement(nums1, 0, nums2, 0, totalLength / 2 + 1).toDouble()
            else (findKthElement(nums1, 0, nums2, 0, totalLength / 2) +
                findKthElement(nums1, 0, nums2, 0, totalLength / 2 + 1)).toDouble() / 2.0
    }

    fun findKthElement(nums1: IntArray, start1: Int, nums2: IntArray, start2: Int, k: Int) : Int {
        if (start1 >= nums1.size) return nums2[start2 + k - 1]
        if (start2 >= nums2.size) return nums1[start1 + k - 1]
        if ( k == 1 ) return minOf(nums1[start1], nums2[start2])

        val index1 = start1 + k / 2 - 1
        val index2 = start2 + k / 2 - 1
        val element1 = if (index1 < nums1.size) nums1[index1] else Int.MAX_VALUE
        val element2 = if (index2 < nums2.size) nums2[index2] else Int.MAX_VALUE

        return if (element1 < element2) findKthElement(nums1, start1 + k / 2, nums2, start2, k - k / 2)
            else findKthElement(nums1, start1, nums2, start2 + k / 2, k - k / 2)
    }
}
