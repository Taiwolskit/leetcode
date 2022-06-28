class Solution:
    def dominantIndex(self, nums: list[int]) -> int:
        if len(nums) == 0:
            return -1

        largest = -1
        second = -1
        maxIdx = 0

        for i, val in enumerate(nums):
            if val >= largest:
                second = largest
                largest = val
                maxIdx = i
            elif val > second:
                second = val

        return maxIdx if largest >= second * 2 else -1
