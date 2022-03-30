class Solution {
    func findMedianSortedArrays(_ nums1: [Int], _ nums2: [Int]) -> Double {
        guard nums1.count <= nums2.count else {
            return findMedianSortedArrays(nums2, nums1)
        }

        let oneSize = nums1.count
        let twoSize = nums2.count
        let total = oneSize + twoSize

        var start = 0
        var end = oneSize

        while start <= end {
            let midX = (start + end) / 2
            let midY = (total + 1) / 2 - midX
            let xLeft = midX == 0 ? Int.min : nums1[midX - 1]
            let xRight = midX == oneSize ? Int.max : nums1[midX]
            let yLeft = midY == 0 ? Int.min : nums2[midY - 1]
            let yRight = midY == twoSize ? Int.max : nums2[midY]

            if xLeft <= yRight && yLeft <= xRight {
                if total % 2 == 0 {
                    return Double((max(xLeft, yLeft) + min(xRight, yRight))) / 2.0
                } else {
                    return Double(max(xLeft, yLeft))
                }
            } else if yLeft > xRight {
                start = midX + 1
            } else {
                end = midX - 1
            }
        }

        return -1
    }
}
