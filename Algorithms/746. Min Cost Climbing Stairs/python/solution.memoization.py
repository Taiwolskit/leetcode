class Solution:
    def minCostClimbingStairs(self, cost: list[int]) -> int:
        def minimum_cost(i: int):
            # Base case, we are allowed to start at either step 0 or step 1
            if i <= 1:
                return 0

            # Check if we have already calculated minimum_cost(i)
            if i in memo:
                return memo[i]

            # If not, cache the result in our hash map and return it
            down_one: int = cost[i - 1] + minimum_cost(i - 1)
            down_two: int = cost[i - 2] + minimum_cost(i - 2)
            memo[i] = min(down_one, down_two)
            return memo[i]

        memo: dict[int, int] = {}
        return minimum_cost(len(cost))
