class Solution:
    def convert(self, s: str, numRows: int) -> str:
        n = numRows - 1
        if n == 0 or len(s) < 2:
            return s

        result = [''] * numRows

        flip = -1
        r = 0
        for char in s:
            if r % n == 0:
                flip *= -1

            result[r] += char
            r += 1 * flip
        return ''.join(result)
