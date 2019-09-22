class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i in range(len(nums)):
            diff = target - nums.pop(0)

            if diff in nums:
                return [i, nums.index(diff) + i + 1]
