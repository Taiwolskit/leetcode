# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    def getIntersectionNode(
        self, headA: ListNode, headB: ListNode
    ) -> ListNode | None:
        while headA:
            pB = headB
            while pB:
                if headA == pB:
                    return headA
                pB = pB.next
            headA = headA.next
        return None
