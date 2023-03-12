class Solution:
    def tribonacci(self, n: int) -> int:
        memo: list[int] = [0, 1, 1] + [0] * (n - 3 + 1)

        for i in range(3, len(memo)):
            memo[i] = memo[i - 1] + memo[i - 2] + memo[i - 3]
        return memo[n]
