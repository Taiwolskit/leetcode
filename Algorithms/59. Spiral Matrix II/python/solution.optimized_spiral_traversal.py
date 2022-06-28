class Solution:
    def generateMatrix(self, n: int) -> list[list[int]]:
        result = [[0 for _ in range(n)] for _ in range(n)]
        # right, down, left, up
        dr = [[0, 1], [1, 0], [0, -1], [-1, 0]]
        row, col, d, cnt = 0, 0, 0, 1

        while cnt <= n * n:
            result[row][col] = cnt

            r = (row + dr[d][0]) % n
            c = (col + dr[d][1]) % n

            if result[r][c] != 0:
                d = (d + 1) % 4

            row += dr[d][0]
            col += dr[d][1]
            cnt += 1

        return result
