class Solution:
    def climbStairs(self, n: int) -> int:
        if n < 2:
            return n

        temp = [1, 1, 2] + [0] * (n - 2)
        for i in range(3, n + 1):
            temp[i] = temp[i-1] + temp[i-2]

        return temp[n]
