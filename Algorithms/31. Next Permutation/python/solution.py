class Solution:
    def nextPermutation(self, nums: list[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        i = len(nums) - 2
        while i >= 0 and nums[i] >= nums[i + 1]:
            i -= 1
        if i >= 0:
            j = len(nums) - 1
            while nums[i] >= nums[j]:
                j -= 1
            nums[i], nums[j] = nums[j], nums[i]

        rev_start = i + 1
        rev_end = len(nums) - 1
        while rev_start < rev_end:
            nums[rev_start], nums[rev_end] = nums[rev_end], nums[rev_start]
            rev_start += 1
            rev_end -= 1
