class Solution:
    def longestCommonPrefix(self, strs: list[str]) -> str:
        if strs is None or len(strs) == 0:
            return ''
        low = 1
        hight = len(min(strs, key=len))
        while low <= hight:
            middle = (low + hight) // 2
            if self.isCommonPrefix(strs, middle):
                low = middle + 1
            else:
                hight = middle - 1
        return strs[0][:(low + hight) // 2]

    def isCommonPrefix(self, strs: list[str], length: int) -> bool:
        str1 = strs[0][:length]
        for string in strs[1:]:
            if not string.startswith(str1):
                return False
        return True
