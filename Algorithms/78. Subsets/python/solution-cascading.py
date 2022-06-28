class Solution:
    def subsets(self, nums: list[int]) -> list[list[int]]:
        subset = [[]]
        for num in nums:
            subset += [item+[num] for item in subset]
        return subset
