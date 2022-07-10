class Solution:
    def longestPalindrome(self, s: str) -> str:
        expand_str = "#".join(f"^{s}$")
        n = len(expand_str)
        P = [0] * n
        center = right = 0
        for i in range(1, n - 1):
            i_mirror = 2 * center - i
            if right > i:
                P[i] = min(right - i, P[i_mirror])
            while expand_str[i + (1 + P[i])] == expand_str[i - (1 + P[i])]:
                P[i] += 1

            if i + P[i] > right:
                center, right = i, i + P[i]

        max_len, center_idex = max((n, i) for i, n in enumerate(P))
        return s[(center_idex - max_len) // 2 : (center_idex + max_len) // 2]
