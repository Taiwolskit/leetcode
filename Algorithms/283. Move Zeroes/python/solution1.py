class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        n = len(nums)
        num_zeroes = 0
        for i in range(n):
            num_zeroes += nums[i] == 0

        ans = list()
        for num in nums:
            if num != 0:
                ans.append(num)
        while num_zeroes > 0:
            ans.append(0)
            num_zeroes -= 1
        for i in range(n):
            nums[i] = ans[i]
