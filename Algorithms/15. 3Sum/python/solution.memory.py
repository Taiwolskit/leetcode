class Solution:
    def threeSum(self, nums: list[int]) -> list[list[int]]:
        sorted_nums = sorted(nums)
        res = set()

        for i in range(len(nums)):
            j = i + 1
            k = len(nums) - 1
            if i > 0 and sorted_nums[i] == sorted_nums[i - 1]:
                continue
            while j < k:
                if sorted_nums[i] + sorted_nums[j] + sorted_nums[k] < 0:
                    j += 1
                elif sorted_nums[i] + sorted_nums[j] + sorted_nums[k] > 0:
                    k -= 1
                else:
                    res.add((sorted_nums[i], sorted_nums[j], sorted_nums[k]))
                    while j < k and sorted_nums[j] == sorted_nums[j + 1]:
                        j += 1
                    while j < k and sorted_nums[k] == sorted_nums[k - 1]:
                        k -= 1
                    j += 1
                    k -= 1
        return list(res)
