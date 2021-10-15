class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        hold, sold, cooldown = float("-inf"), 0, 0

        for price in prices:
            hold = max(hold, cooldown-price)
            cooldown = max(cooldown, sold)
            sold = max(sold, hold+price)

        return sold
