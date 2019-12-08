class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        hashmap = dict()
        maxCount = 0
        beginIndex = 0

        for i in range(len(s)):
            if s[i] in hashmap:
                beginIndex = max(beginIndex, hashmap[s[i]] + 1)

            hashmap[s[i]] = i
            maxCount = max(maxCount, i - beginIndex + 1)

        return maxCount
