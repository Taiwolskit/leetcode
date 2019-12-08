class Solution {
    func findMedianSortedArrays(_ nums1: [Int], _ nums2: [Int]) -> Double {
        let c1 = nums1.count
        let c2 = nums2.count
        let c = c1 + c2
        let isEven = (c % 2) == 0
        let kMax: Int = c / 2
        var nums = Array<Int>(repeating: 0, count: kMax + 1)
        var i = 0, j = 0, k = 0
        while i < c1 && j < c2 {
            if nums1[i] <= nums2[j] {
                nums[k] = nums1[i]
                i += 1
            } else {
                nums[k] = nums2[j]
                j += 1
            }
            k += 1
            if k > kMax { break }
        }
        while i < c1 && k <= kMax {
            nums[k] = nums1[i]
            i += 1
            k += 1
            if k > kMax { break }
        }
        while j < c2 && k <= kMax {
            nums[k] = nums2[j]
            j += 1
            k += 1
            if k > kMax { break }
        }
        if isEven {
            return (Double(nums[kMax]) + Double(nums[kMax - 1])) * 0.5
        } else {
            return Double(nums[kMax])
        }
    }
}
