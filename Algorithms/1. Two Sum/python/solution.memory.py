class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        for i in range(len(nums)):
            diff = target - nums[i]

            if diff in nums and i is not nums.index(diff):
                return [nums.index(diff), i]
