from collections import Counter


class Solution:
    def findPairs(self, nums: list[int], k: int) -> int:
        result = 0

        counter = Counter(nums)

        for x in counter:
            if (k > 0 and x + k in counter) or (k == 0 and counter[x] > 1):
                result += 1
        return result
