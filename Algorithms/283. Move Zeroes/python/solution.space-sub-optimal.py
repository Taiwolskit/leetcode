class Solution:
    def moveZeroes(self, nums: list[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        n = len(nums)

        # Count the zeroes
        num_zeroes = 0
        for i in range(n):
            num_zeroes += nums[i] == 0

        # Make all the non-zero elements retain their original order.
        ans = list()
        for num in nums:
            if num != 0:
                ans.append(num)

        # Move all zeroes to the end
        while num_zeroes > 0:
            ans.append(0)
            num_zeroes -= 1

        # Combine the result
        for i in range(n):
            nums[i] = ans[i]
