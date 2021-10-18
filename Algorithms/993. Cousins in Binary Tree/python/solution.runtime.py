# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isCousins(self, root: Optional[TreeNode], x: int, y: int) -> bool:
        depth = 0
        curr = [(root, None)]
        dp = {}

        while curr:
            depth += 1
            next_node = []

            for node, par in curr:
                dp[node.val] = (depth, par)
                le = node.left
                ri = node.right

                if le:
                    next_node.append((le, node))

                if ri:
                    next_node.append((ri, node))

            curr = next_node

        return dp[x][0] == dp[y][0] and dp[x][1] != dp[y][1]
