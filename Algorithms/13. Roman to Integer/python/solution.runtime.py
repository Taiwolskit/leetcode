class Solution:
    def romanToInt(self, s: str) -> int:
        d = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000,
        }
        total = 0
        curr = 0
        for i in s[::-1]:
            if d[i] >= curr:
                total += d[i]
            else:
                total -= d[i]
            curr = d[i]

        return total
