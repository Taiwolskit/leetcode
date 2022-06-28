class Solution:
    def generateMatrix(self, n: int) -> list[list[int]]:
        result = [[0 for _ in range(n)] for _ in range(n)]
        cnt = 1
        for layer in range((n + 1) // 2):
            # direction 1 - traverse from left to right
            for i in range(layer, n - layer):
                result[layer][i] = cnt
                cnt += 1
            # direction 2 - traverse from top to bottom
            for i in range(layer + 1, n - layer):
                result[i][n - layer - 1] = cnt
                cnt += 1
            # direction 3 - traverse from right to left
            for i in range(layer + 1, n - layer):
                result[n - layer - 1][n - i - 1] = cnt
                cnt += 1
            # direction 4 - traverse from bottom to top
            for i in range(layer + 1, n - layer - 1):
                result[n - i - 1][layer] = cnt
                cnt += 1
        return result
