class Solution:
    def numDistinct(self, s: str, t: str) -> int:
        m = len(t)
        n = len(s)
        if m > n:
            return 0
        elif m == n:
            return int(s == t)

        dp = [c == t[0] for c in s]
        for c in t[1:]:
            count = 0
            for j in range(n):
                temp = dp[j]
                dp[j] = count if s[j] == c else 0
                count += temp

        return sum(dp)
