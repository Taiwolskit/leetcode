"""
# Definition for a Node.
class Node:
    def __init__(self, val=None, next=None):
        self.val = val
        self.next = next
"""


class Solution:
    def insert(self, head: "Optional[Node]", insertVal: int) -> "Node":

        if head is None:
            newNode = Node(insertVal, None)
            newNode.next = newNode
            return newNode

        prev, curr = head, head.next
        while curr != head:
            if prev.val <= insertVal <= curr.val:
                # Case #1.
                break
            if prev.val > curr.val:
                # Case #2. where we locate the tail element
                # 'prev' points to the tail, i.e. the largest element!
                if insertVal >= prev.val or insertVal <= curr.val:
                    break
            prev, curr = curr, curr.next
        # Case #3.
        # did not insert the node in the loop
        prev.next = Node(insertVal, curr)
        return head
