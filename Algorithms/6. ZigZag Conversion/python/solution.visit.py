class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if numRows == 1:
            return s

        ret = ''
        n = len(s)
        cycle_len = 2 * numRows - 2
        for i in range(numRows):
            for j in range(i, n, cycle_len):
                ret += s[j]
                if i != 0 and i != numRows - 1 and j + cycle_len - 2 * i < n:
                    ret += s[j + cycle_len - 2 * i]
        return ret
