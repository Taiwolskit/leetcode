# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def recoverTree(self, root: TreeNode | None) -> None:
        """
        Do not return anything, modify root in-place instead.
        """

        x = y = pred = None

        def find_two_swapped(root: TreeNode) -> None:
            nonlocal x, y, pred
            if root is None:
                return

            find_two_swapped(root.left)
            if pred and root.val < pred.val:
                y = root
                # first swap occurence
                if x is None:
                    x = pred
                # second swap occurence
                else:
                    return
            pred = root
            find_two_swapped(root.right)

        find_two_swapped(root)
        x.val, y.val = y.val, x.val
