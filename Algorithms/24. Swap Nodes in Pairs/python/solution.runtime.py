# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    def swapPairs(self, head: ListNode) -> ListNode:
        p = dummy = ListNode(0)
        p.next = head
        while head and head.next:
            t1 = head
            t2 = head.next
            head = head.next.next
            p.next = t2
            t2.next = t1
            t1.next = head
            p = t1
        return dummy.next
