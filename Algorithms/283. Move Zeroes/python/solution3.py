class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        last_non_zero_found_at = 0
        for (i, num) in enumerate(nums):
            if num != 0:
                nums[last_non_zero_found_at], nums[i] = (
                    nums[i],
                    nums[last_non_zero_found_at],
                )
                last_non_zero_found_at += 1
