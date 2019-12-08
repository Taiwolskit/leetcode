class Solution {
    fun findMedianSortedArrays(nums1: IntArray, nums2: IntArray): Double {
        val cnt = nums1.size + nums2.size
        var resAr:IntArray = IntArray(cnt)
        var i1 = 0;
        var i2 = 0;
        for (i in 0..cnt-1) {
            if (i2<nums2.size && i1<nums1.size) {
                if (nums1[i1] >= nums2[i2]) {
                    resAr[i] = nums2[i2]
                    i2++
                } else {
                    resAr[i] = nums1[i1]
                    i1++
                }
            } else {
                if (i1 >= nums1.size) {
                    if (i2<nums2.size) {
                        resAr[i] = nums2[i2]
                        i2++
                    }
                }

                if (i2 >= nums2.size) {
                    if (i1<nums1.size) {
                        resAr[i] = nums1[i1]
                        i1++
                    }
                }
            }
        }

        if (cnt % 2 == 0) {
            return (resAr[cnt / 2] + resAr[cnt/2 - 1]).toDouble() / 2
        } else {
            return (resAr[(cnt - 1) / 2]).toDouble()
        }
    }
}
