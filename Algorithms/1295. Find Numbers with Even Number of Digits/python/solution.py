class Solution:
    def findNumbers(self, nums: List[int]) -> int:
        return sum(~len(str(x)) & 1 for x in nums)
