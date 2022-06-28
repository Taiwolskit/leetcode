import sys


class Solution:
    def minSubArrayLen(self, target: int, nums: list[int]) -> int:
        n = len(nums)
        ans = sys.maxsize
        left = 0
        total = 0
        for i in range(n):
            total += nums[i]
            while total >= target:
                ans = min(ans, i - left + 1)
                total -= nums[left]
                left += 1
        return ans if ans != sys.maxsize else 0
