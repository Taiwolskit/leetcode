class Solution:
    def maxLength(self, arr: list[str]) -> int:
        return self.helper('', arr, 0)

    def helper(self, curr, arr, idx):
        res = len(curr)
        if idx >= len(arr):
            return res

        for i in range(idx, len(arr)):
            if not set(curr) & set(arr[i]) and (len(arr[i]) == len(set(arr[i]))):
                res = max(res, self.helper(curr + arr[i], arr, i + 1))
        return res
