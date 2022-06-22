# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next


class Solution:
    def removeNthFromEnd(self, head: ListNode | None, n: int) -> ListNode | None:
        dummy: ListNode = ListNode(0, head)
        length: int = 0
        first: ListNode = head
        while first is not None:
            length += 1
            first = first.next

        first = dummy
        for _ in range(length - n, 0, -1):
            first = first.next

        first.next = first.next.next
        return dummy.next
