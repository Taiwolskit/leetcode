class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        dp = [0] * len(prices)
        for j in range(len(prices)):
            for i in range(j):
                dp[j] = max(dp[j], (dp[i-2] if i >= 2 else 0) +
                            prices[j] - prices[i], dp[i])
        return dp[-1]
