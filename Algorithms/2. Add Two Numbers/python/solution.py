# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(
        self, l1: ListNode | None, l2: ListNode | None
    ) -> ListNode | None:
        dummy_head = ListNode(0)
        p = l1
        q = l2
        curr = dummy_head
        carry = 0
        while p or q or carry:
            x = p.val if p else 0
            y = q.val if q else 0
            carry, remain = divmod(x + y + carry, 10)
            curr.next = ListNode(remain)
            curr = curr.next
            p = p.next if p else None
            q = q.next if q else None

        return dummy_head.next
