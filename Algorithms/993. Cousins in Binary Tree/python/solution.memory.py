# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from collections import deque


class Solution:
    def isCousins(self, root: Optional[TreeNode], x: int, y: int) -> bool:
        queue = deque([(root, None, 0)])
        output = []
        while queue:
            if len(output) == 2:
                break
            currNode, currParent, currLevel = queue.popleft()
            if currNode.val == x or currNode.val == y:
                output.append((currParent, currLevel))
            if currNode.left:
                queue.append((currNode.left, currNode, currLevel + 1))
            if currNode.right:
                queue.append((currNode.right, currNode, currLevel + 1))
        node1, node2 = output
        return node1[0] != node2[0] and node1[1] == node2[1]
