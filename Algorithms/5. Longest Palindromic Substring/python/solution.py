class Solution:
    def longestPalindrome(self, s: str) -> str:
        if s == s[::-1]:
            return s

        maxlen = 1
        start = 0
        for i in range(1, len(s)):
            if i - maxlen >= 1:
                temp = s[i - maxlen - 1: i + 1]

                if temp == temp[::-1]:
                    start = i - maxlen - 1
                    maxlen += 2
                    continue
            if i - maxlen >= 0:
                temp = s[i - maxlen: i + 1]

                if temp == temp[::-1]:
                    start = i - maxlen
                    maxlen += 1

        return s[start:start + maxlen]
