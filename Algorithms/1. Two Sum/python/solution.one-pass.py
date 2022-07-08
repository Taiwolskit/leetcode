class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        hashmap: dict[int, int] = {}

        for (i, num) in enumerate(nums):
            complement = target - num
            if complement in hashmap:
                return [i, hashmap[complement]]
            hashmap[num] = i
