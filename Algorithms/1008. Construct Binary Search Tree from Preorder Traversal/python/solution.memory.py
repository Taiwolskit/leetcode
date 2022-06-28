# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def bstFromPreorder(self, preorder: list[int]) -> TreeNode | None:
        def constructTree(preorder):
            if not preorder:
                return None
            i = 1
            root = TreeNode(preorder[0])
            while i < len(preorder) and preorder[i] < root.val:
                i += 1
            root.left = constructTree(preorder[1:i])
            root.right = constructTree(preorder[i:])
            return root

        return constructTree(preorder)
