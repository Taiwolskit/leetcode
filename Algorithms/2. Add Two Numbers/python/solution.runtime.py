# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        if not l1 and not l2 or (l1.val == 0 and l2.val == 0):
            print(0)
            exit()
        z1, z2 = [], []

        while l1:
            z1 += str(l1.val)
            l1 = l1.next
        while l2:
            z2 += str(l2.val)
            l2 = l2.next

        z1.reverse(), z2.reverse()
        t1, t2 = '', ''
        for i in z1:
            t1 += i
        for i in z2:
            t2 += i
        final = str(int(t1) + int(t2))

        res = ListNode(int(final[-1]))
        ptr = res
        for i in range(-2, -len(final)-1, -1):
            ptr.next = ListNode(int(final[i]))
            ptr = ptr.next
        return res
