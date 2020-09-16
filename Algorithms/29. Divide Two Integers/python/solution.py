class Solution:
    def divide(self, dividend: int, divisor: int) -> int:
        p = int(dividend / divisor)
        if p == 1 << 31:
            p -= 1
        return p
