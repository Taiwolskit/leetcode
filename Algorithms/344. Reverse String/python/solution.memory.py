class Solution:
    def reverseString(self, s: List[str]) -> None:

        for c in range(0, len(s)):
            last = s.pop()
            s.insert(c, last)
