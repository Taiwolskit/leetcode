from collections import deque


class Solution:
    def reverseWords(self, s: str) -> str:
        left, right = 0, len(s) - 1
        # remove leading spaces
        while left <= right and s[left] == " ":
            left += 1

        # remove trailing spaces
        while left <= right and s[right] == " ":
            right -= 1

        d, word = deque(), []
        # push word by word in front of deque
        for i in range(left, right + 1):
            if s[i] == " " and word:
                d.appendleft("".join(word))
                word = []
            elif s[i] != " ":
                word.append(s[i])
        d.appendleft("".join(word))

        return " ".join(d)
