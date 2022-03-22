class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        ans = 0
        # mp stores the current index of a character
        mp = {}

        i = 0
        # try to extend the range [i, j]
        for j, char in enumerate(s):
            if char in mp:
                i = max(mp[char], i)

            ans = max(ans, j - i + 1)
            mp[char] = j + 1

        return ans
