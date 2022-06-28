class Solution:
    def subsets(self, nums: list[int]) -> list[list[int]]:
        def backtrack(first=0, curr=[]):
            output.append(curr[:])

            for i in range(first, len(nums)):
                backtrack(i+1, curr + [nums[i]])

        output = []
        backtrack()
        return output
