class Solution:
    def longestValidParentheses(self, s: str) -> int:
        maxLength, left, right = 0, 0, 0

        for value in s:
            if value == "(":
                left += 1
            else:
                right += 1

            if left == right:
                maxLength = max(maxLength, left + right)
            elif right > left:
                left, right = 0, 0

        left, right = 0, 0
        for i in range(len(s) - 1, -1, -1):
            if s[i] == "(":
                left += 1
            else:
                right += 1

            if left == right:
                maxLength = max(maxLength, left + right)
            elif left > right:
                left, right = 0, 0

        return maxLength
