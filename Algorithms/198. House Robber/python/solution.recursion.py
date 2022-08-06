class Solution:
    def __init__(self):
        self.memo = {}

    def rob(self, nums: list[int]) -> int:
        self.memo = {}
        return self.robFrom(0, nums)

    def robFrom(self, i: int, nums: list[int]) -> int:
        # No more houses left to examine.
        if i >= len(nums):
            return 0

        # Return cached value.
        if i in self.memo:
            return self.memo[i]

        # Recursive relation evaluation to get the optimal answer.
        ans = max(self.robFrom(i + 1, nums), self.robFrom(i + 2, nums) + nums[i])

        # Cache for future use.
        self.memo[i] = ans
        return ans
