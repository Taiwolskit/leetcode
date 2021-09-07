class Solution:

    def subsets(self, nums: List[int]) -> List[List[int]]:
        res = []
        i = 0
        self.helper(nums, i, [], res)
        return res

    def helper(self, nums, i, sub, res):
        if i >= len(nums):
            res.append(sub)
        else:
            self.helper(nums, i + 1, sub + [nums[i]], res)
            self.helper(nums, i + 1, sub, res)
