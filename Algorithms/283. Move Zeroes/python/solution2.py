class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        last_non_zero_found_at = 0
        for num in nums:
            if num != 0:
                nums[last_non_zero_found_at] = num
                last_non_zero_found_at += 1
        for i in range(last_non_zero_found_at, len(nums)):
            nums[i] = 0
