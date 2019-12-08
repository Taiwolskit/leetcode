class Solution {
    fun findMedianSortedArrays(nums1: IntArray, nums2: IntArray): Double {
        val zippedArray = (nums1 + nums2).toTypedArray().sorted()
        val median:Double = if (zippedArray.size % 2 == 1)
        zippedArray[(zippedArray.size / 2).toInt()].toDouble() else
        (zippedArray[(zippedArray.size / 2).toInt()] + zippedArray[(zippedArray.size / 2 - 1).toInt()]) / 2.toDouble()
        return median
    }
}
