# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeElements(self, head: ListNode | None, val: int) -> ListNode | None:
        if head is None:
            return None
        head.next = self.removeElements(head.next, val)
        return head.next if head.val == val else head
