class Solution:
    def rob(self, nums: List[int]) -> int:
        # Special handling for empty case.
        if not nums:
            return 0

        N = len(nums)

        rob_next_plus_one = 0
        rob_next = nums[N - 1]

        # DP table calculations.
        for i in range(N - 2, -1, -1):
            # Same as recursive solution.
            # Update the variables
            rob_next, rob_next_plus_one = max(
                rob_next, rob_next_plus_one + nums[i]), rob_next

        return rob_next
