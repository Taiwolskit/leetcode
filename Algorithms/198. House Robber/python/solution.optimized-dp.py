class Solution:
    def rob(self, nums: list[int]) -> int:

        # Special handling for empty case.
        if not nums:
            return 0

        N: int = len(nums)

        rob_next_plus_one: int = 0
        rob_next: int = nums[N - 1]

        # DP table calculations.
        for i in range(N - 2, -1, -1):

            # Same as recursive solution.
            current: int = max(rob_next, rob_next_plus_one + nums[i])

            # Update the variables
            rob_next_plus_one = rob_next
            rob_next = current

        return rob_next
