class Solution:
    def exist(self, board: list[list[str]], word: str) -> bool:

        def backtrack(row, col, suffix):
            if len(suffix) == 0:
                return True

            if row < 0 or col < 0 or row == m or col == n:
                return False

            if board[row][col] != suffix[0]:
                return False

            result = False
            board[row][col] = 'seen'
            if (
                backtrack(row+1, col, suffix[1:]) or
                backtrack(row-1, col, suffix[1:]) or
                backtrack(row, col+1, suffix[1:]) or
                backtrack(row, col-1, suffix[1:])
            ):
                result = True
            board[row][col] = suffix[0]
            return result

        m, n = len(board), len(board[0])

        for i in range(m):
            for j in range(n):
                if backtrack(i, j, word):
                    return True
        return False
