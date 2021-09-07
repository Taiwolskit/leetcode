class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        ans = []

        def backtrack(S='', left=0, right=0):
            if len(S) == 2 * n:
                ans.append(S)
                return
            if n > left:
                backtrack(S+'(', left+1, right)
            if left > right:
                backtrack(S+')', left, right+1)

        backtrack()
        return ans
