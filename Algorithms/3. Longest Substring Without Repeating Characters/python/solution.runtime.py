class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if s == "":
            return 0
        temp = result = ""
        for sub in s:
            if sub in temp:
                if len(temp) > len(result):
                    result = temp
                temp = temp.split(sub)[1] + sub
            else:
                temp += sub
        if len(temp) > len(result):
            result = temp
        return len(result)
