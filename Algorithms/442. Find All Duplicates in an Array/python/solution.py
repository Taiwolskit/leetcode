class Solution:
    def findDuplicates(self, nums: list[int]) -> list[int]:
        seen = set()
        return [x for x in nums if x in seen or seen.add(x)]
