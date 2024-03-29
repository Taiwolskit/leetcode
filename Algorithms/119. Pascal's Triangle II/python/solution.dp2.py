class Solution:
    def getRow(self, rowIndex: int) -> list[int]:
        ans = [1] * (rowIndex + 1)
        for i in range(1, rowIndex):
            for j in range(i, 0, -1):
                ans[j] += ans[j - 1]
        return ans
