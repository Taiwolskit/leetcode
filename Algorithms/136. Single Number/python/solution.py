class Solution:
    def singleNumber(self, nums: list[int]) -> int:
        """
        :type nums: list[int]
        :rtype: int
        """
        a = 0
        for i in nums:
            a ^= i
        return a
