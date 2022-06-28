class Solution:
    def sortArrayByParityII(self, nums: list[int]) -> list[int]:
        even_idx = 0
        odd_idx = 1
        sz = len(nums)

        while even_idx < sz and odd_idx < sz:
            if nums[even_idx] % 2 == 0:
                even_idx += 2
            elif nums[odd_idx] % 2 == 1:
                odd_idx += 2
            else:
                nums[even_idx], nums[odd_idx] = nums[odd_idx], nums[even_idx]
                even_idx += 2
                odd_idx += 2

        return nums
