class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if not s:
            return 0

        dic = {}
        max = 0
        start = -1

        for i, v in enumerate(s):
            if v in dic and dic[v] > start:
                start = dic[v]
                dic[v] = i
            else:
                dic[v] = i
                if i-start > max:
                    max = i-start

        return max
