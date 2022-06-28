class Solution:
    def getRow(self, rowIndex: int) -> list[int]:
        ans = [1]
        for k in range(1, rowIndex + 1):
            ans.append(ans[-1] * (rowIndex - k + 1) // k)
        return ans
