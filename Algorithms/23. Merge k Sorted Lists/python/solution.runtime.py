# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    def mergeKLists(self, lists: list[ListNode]) -> ListNode:
        merged_lists = []
        for head in lists:
            node = head
            while node is not None:
                merged_lists.append(node)
                node = node.next

        merged_lists.sort(key=lambda node: node.val)

        for i in range(0, len(merged_lists)-1):
            merged_lists[i].next = merged_lists[i+1]

        if len(merged_lists) > 0:
            merged_lists[-1].next = None

        return merged_lists[0] if len(merged_lists) > 0 else None
