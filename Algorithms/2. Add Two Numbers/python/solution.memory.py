# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        add = l1.val + l2.val
        carry = add // 10
        prev_node = ListNode(add % 10)
        head = prev_node
        l1 = l1.next
        l2 = l2.next

        while True:
            if (l1 is not None and l2 is not None):
                add = l1.val + l2.val + carry
                carry = add // 10
                next_node = ListNode(add % 10)
                prev_node.next = next_node
                prev_node = next_node
                l1 = l1.next
                l2 = l2.next
            elif (l1 is not None):
                add = l1.val + carry
                carry = add // 10
                next_node = ListNode(add % 10)
                prev_node.next = next_node
                prev_node = next_node
                l1 = l1.next
            elif (l2 is not None):
                add = l2.val + carry
                carry = add // 10
                next_node = ListNode(add % 10)
                prev_node.next = next_node
                prev_node = next_node
                l2 = l2.next
            else:
                if (carry == 0):
                    return head
                add = carry
                carry = add // 10
                next_node = ListNode(add % 10)
                prev_node.next = next_node
                prev_node = next_node
