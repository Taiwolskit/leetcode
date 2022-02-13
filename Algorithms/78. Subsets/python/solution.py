class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        def backtrack(first=0, curr=[]):
            output.append(curr[:])

            for i in range(first, len(nums)):
                curr.append(nums[i])
                backtrack(i+1, curr)
                curr.pop()

        output = []
        backtrack()
        return output
