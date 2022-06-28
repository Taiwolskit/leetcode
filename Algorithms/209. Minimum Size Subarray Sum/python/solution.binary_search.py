import sys
from bisect import bisect_left


class Solution:
    def minSubArrayLen(self, target: int, nums: list[int]) -> int:
        n = len(nums)
        if n == 0:
            return 0
        ans = sys.maxsize
        sums = [0] * (n + 1)
        for i in range(1, n + 1):
            sums[i] = sums[i - 1] + nums[i - 1]
        for i in range(1, n + 1):
            to_find = target + sums[i - 1]
            index = bisect_left(sums, to_find)
            if index != n + 1:
                ans = min(ans, index - i + 1)

        return ans if ans != sys.maxsize else 0
