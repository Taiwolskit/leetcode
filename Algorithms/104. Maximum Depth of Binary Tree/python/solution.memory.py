# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: TreeNode) -> int:
        depth = 0
        level = [root] if root else []
        while level:
            queue = []
            for le in level:
                if le and le.left:
                    queue.append(le.left)
                if le and le.right:
                    queue.append(le.right)
            depth += 1
            level = queue
        return depth
