class Solution:
    def findNumbers(self, nums: list[int]) -> int:
        return sum(~len(str(x)) & 1 for x in nums)
