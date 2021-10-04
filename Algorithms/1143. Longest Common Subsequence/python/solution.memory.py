class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        m, n = len(text1), len(text2)

        if m < n:
            return self.longestCommonSubsequence(text2, text1)
        dp = [0 for _ in range(n + 1)]

        for c in text1:
            row, col = 0, 0
            for j, d in enumerate(text2):
                row, col = dp[j + 1], row
                dp[j + 1] = col + 1 if c == d else max(dp[j], row)

        return dp[-1]
