class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        dicts = {}
        maxlength = start = 0

        for (index, value) in enumerate(s):
            if value in dicts:
                sums = dicts[value] + 1
                if sums > start:
                    start = sums

            num = index - start + 1
            if num > maxlength:
                maxlength = num

            dicts[value] = index

        return maxlength
