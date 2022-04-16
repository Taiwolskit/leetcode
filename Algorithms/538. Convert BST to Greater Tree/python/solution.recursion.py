class Solution(object):
    def __init__(self):
        self.total = 0

    def convertBST(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        if root is not None:
            self.convertBST(root.right)
            self.total += root.val
            root.val = self.total
            self.convertBST(root.left)
        return root
