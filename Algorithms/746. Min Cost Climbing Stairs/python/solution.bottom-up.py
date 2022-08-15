class Solution:
    def minCostClimbingStairs(self, cost: list[int]) -> int:
        down_one = down_two = 0
        for i in range(2, len(cost) + 1):
            temp: int = down_one
            down_one = min(down_one + cost[i - 1], down_two + cost[i - 2])
            down_two = temp

        return down_one
