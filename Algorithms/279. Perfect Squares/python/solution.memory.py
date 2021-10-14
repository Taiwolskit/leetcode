class Solution:
    def numSquares(self, n: int) -> int:
        def dfs(N, c):
            if c == 0:
                return N == 0
            L = floor(N**(0.5))
            for i in range(1, L+1):
                if dfs(N-i*i, c-1):
                    return True
            return False
        for i in range(1, n+1):
            if dfs(n, i):
                return i
        return -1
