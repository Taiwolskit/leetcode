class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        n = len(nums)
        queue = [nums]
        res = [nums]
        for i in range(n - 1):
            for item in queue:
                for j in range(i + 1, n):
                    res.append(self.cloneAndSwap(item, i, j))
            queue = res[::]
        return res

    def cloneAndSwap(self, arr, i, j):
        clone = arr[::]
        clone[i], clone[j] = clone[j], clone[i]
        return clone
