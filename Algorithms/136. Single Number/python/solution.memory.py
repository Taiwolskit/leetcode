class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        while len(nums) > 0:
            number = nums.pop()
            if number in nums:
                del nums[nums.index(number)]
            else:
                return number
