# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        if l1 is None:
            return l2
        if l2 is None:
            return l1

        cur1 = l1
        cur2 = l2

        dummy = ListNode(0)
        res = dummy

        while cur1 is not None and cur2 is not None:
            if cur1.val <= cur2.val:
                res.next = cur1
                cur1 = cur1.next
                res = res.next
            else:
                res.next = cur2
                cur2 = cur2.next
                res = res.next

        if cur1 is None and cur2 is not None:
            res.next = cur2
        elif cur1 is not None and cur2 is None:
            res.next = cur1

        return dummy.next
