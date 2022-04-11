class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if numRows == 1:
            return s

        rows = [""]*numRows
        cur_row = 0
        going_down = -1

        for c in s:
            rows[cur_row] += c
            if cur_row == 0 or cur_row == numRows-1:
                going_down *= -1
            cur_row += going_down

        return "".join(rows)
