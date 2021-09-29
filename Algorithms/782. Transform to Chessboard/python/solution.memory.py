class Solution:
    def movesToChessboard(self, board: List[List[int]]) -> int:
        cs = 0
        rs = 0
        rsw = 0
        csw = 0
        for i in range(len(board)):
            for j in range(len(board)):
                if (board[0][0] + board[0][i] + board[j][0] + board[j][i]) % 2:
                    return -1
        for i in range(len(board)):
            rs += board[0][i]
            cs += board[i][0]
            rsw += board[i][0] == i % 2
            csw += board[0][i] == i % 2
        if (cs != len(board) // 2) and (cs != (len(board) + 1) // 2) or \
                (rs != len(board) // 2) and (rs != (len(board) + 1) // 2):
            return -1
        if len(board) % 2:
            if csw % 2:
                csw = len(board) - csw
            if rsw % 2:
                rsw = len(board) - rsw
        else:
            csw = min(len(board) - csw, csw)
            rsw = min(len(board) - rsw, rsw)
        return (csw + rsw) // 2
