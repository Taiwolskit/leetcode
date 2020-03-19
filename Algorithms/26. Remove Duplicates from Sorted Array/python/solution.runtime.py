class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        length = 0

        for idx in range(1, len(nums)):
            if nums[length] != nums[idx]:
                length += 1
                nums[length] = nums[idx]

        return length + 1
