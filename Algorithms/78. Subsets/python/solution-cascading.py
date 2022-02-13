class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        subset = [[]]
        for num in nums:
            subset += [item+[num] for item in subset]
        return subset
