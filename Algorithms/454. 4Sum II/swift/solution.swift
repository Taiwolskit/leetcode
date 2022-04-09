class Solution {
    func fourSumCount(_ nums1: [Int], _ nums2: [Int], _ nums3: [Int], _ nums4: [Int]) -> Int {
        var cnt = 0
        var m = [Int: Int]()
        for a in nums1 {
            for b in nums2 {
                m[a + b, default: 0] += 1
            }
        }
        for c in nums3 {
            for d in nums4 {
                cnt += m[-(c + d)] ?? 0
            }
        }
        return cnt
    }
}
