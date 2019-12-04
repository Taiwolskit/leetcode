class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        """
        :type strs: List[str]
        :rtype: str
        """
        if not strs:
            return ""
        commonPrefix = strs[0]
        for i in range(1, len(strs)):
            j = 0
            ans = ""
            while j < len(commonPrefix) and j < len(strs[i]):
                if commonPrefix[j] == strs[i][j]:
                    ans += commonPrefix[j]
                else:
                    break
                j += 1
            commonPrefix = ans
        return commonPrefix
