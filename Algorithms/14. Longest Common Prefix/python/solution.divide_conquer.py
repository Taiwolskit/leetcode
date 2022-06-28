class Solution:
    def longestCommonPrefix(self, strs: list[str]) -> str:
        if strs is None or len(strs) == 0:
            return ''
        return self.longestPrefix(strs, 0, len(strs) - 1)

    def longestPrefix(self, strs: list[str], l: int, r: int) -> str:
        if l == r:
            return strs[l]
        mid = (l + r) // 2
        lcp_left = self.longestPrefix(strs, l, mid)
        lcp_right = self.longestPrefix(strs, mid + 1, r)
        return self.commonPrefix(lcp_left, lcp_right)

    def commonPrefix(self, left: str, right: str) -> str:
        min_len = min(len(left), len(right))
        for i in range(min_len):
            if left[i] != right[i]:
                return left[:i]
        return left[:min_len]
