class Solution:
    def fourSumCount(self, nums1: list[int], nums2: list[int], nums3: list[int], nums4: list[int]) -> int:
        cnt = 0
        m = {}
        for a in nums1:
            for b in nums2:
                m[a + b] = m.get(a + b, 0) + 1
        for c in nums3:
            for d in nums4:
                cnt += m.get(-(c + d), 0)
        return cnt
