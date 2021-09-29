class Solution:
    def movesToChessboard(self, board: List[List[int]]) -> int:
        n = len(board)
        board0 = board[0]
        if not (n // 2 <= sum(board0) <= (n + 1) // 2):
            return -1
        nboard0 = [1 - x for x in board0]
        hb = []
        for i in range(n):
            if board[i] == board0:
                hb.append(0)
            elif board[i] == nboard0:
                hb.append(1)
            else:
                return -1
        if not (n // 2 <= sum(hb) <= (n + 1) // 2):
            return -1

        def sub(b):
            if n % 2 == 1:
                if sum(b) == n // 2:  # zero one zero one
                    return sum(b[i] for i in range(0, n, 2))
                else:
                    return sum(b[i] for i in range(1, n, 2))
            return min(sum(b[i] == j for i in range(0, n, 2)) for j in range(2))

        return sub(board0) + sub(hb)
