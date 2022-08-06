class Solution:
    def rob(self, nums: list[int]) -> int:
        # Special handling for empty case.
        if not nums:
            return 0

        N: int = len(nums)
        maxRobbedAmount: list[int | None] = [None for _ in range(N + 1)]

        # Base case initialization.
        maxRobbedAmount[N], maxRobbedAmount[N - 1] = 0, nums[N - 1]

        # DP table calculations.
        for i in range(N - 2, -1, -1):

            # Same as recursive solution.
            maxRobbedAmount[i] = max(
                maxRobbedAmount[i + 1], maxRobbedAmount[i + 2] + nums[i]
            )

        return maxRobbedAmount[0]
