class Solution:
    def myAtoi(self, s: str) -> int:
        result = re.search('^[+-]?\d+', s.strip())
        result = int(result[0] if result else 0)
        return sorted((result, -1 << 31, (1 << 31) - 1))[1]
