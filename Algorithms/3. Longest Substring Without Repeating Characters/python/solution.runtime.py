class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        cache = {}
        res = start = 0
        for idx, char in enumerate(s):
            if char in cache and start <= cache[char]:
                start = cache[char] + 1
            else:
                res = max(idx - start + 1, res)
            cache[char] = idx
        return res
