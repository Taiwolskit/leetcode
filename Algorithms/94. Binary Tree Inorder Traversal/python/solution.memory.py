# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def inorderTraversal(self, root: TreeNode | None) -> list[int]:

        if root:
            result = self.inorderTraversal(root.left)
            result.append(root.val)
            result.extend(self.inorderTraversal(root.right))
            return result
        return []
