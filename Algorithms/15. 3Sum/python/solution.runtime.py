class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        from collections import Counter
        nums_zero = Counter(filter(lambda x: x == 0, nums))
        nums_pos = Counter(filter(lambda x: x > 0, nums))
        nums_neg = Counter(map(lambda x: -x, filter(lambda x: x < 0, nums)))

        res = []
        if nums_zero:
            if nums_zero[0] >= 3:
                res.append([0, 0, 0])
            common = set(nums_pos.keys()).intersection(nums_neg.keys())
            for c in common:
                res.append([-c, 0, c])

        pos = list(nums_pos.keys())
        for i, c in enumerate(pos):
            if nums_pos[c] > 1:
                if c*2 in nums_neg:
                    res.append([-2*c, c, c])
            for c2 in pos[i+1:]:
                if c+c2 in nums_neg:
                    res.append([-(c+c2), c, c2])
        neg = list(nums_neg.keys())
        for i, c in enumerate(neg):
            if nums_neg[c] > 1:
                if c*2 in nums_pos:
                    res.append([-c, -c, 2*c])
            for c2 in neg[i+1:]:
                if c+c2 in nums_pos:
                    res.append([-c2, -c, c+c2])

        return res
