class Solution:
    def moveZeroes(self, nums: list[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        last_non_zero_found_at = 0
        # If the current element is not 0, then we need to
        # append it just in front of last non 0 element we found.
        for num in nums:
            if num != 0:
                nums[last_non_zero_found_at] = num
                last_non_zero_found_at += 1

        # After we have finished processing new elements,
        # all the non-zero elements are already at beginning of array.
        # We just need to fill remaining array with 0's.
        for i in range(last_non_zero_found_at, len(nums)):
            nums[i] = 0
