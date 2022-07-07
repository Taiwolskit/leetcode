/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public var val: Int
 *     public var next: ListNode?
 *     public init() { self.val = 0; self.next = nil; }
 *     public init(_ val: Int) { self.val = val; self.next = nil; }
 *     public init(_ val: Int, _ next: ListNode?) { self.val = val; self.next = next; }
 * }
 */
class Solution {
    func mergeTwoLists(_ list1: ListNode?, _ list2: ListNode?) -> ListNode? {
        var prehead: ListNode? = ListNode(0)

        var prev: ListNode? = prehead
        var l1: ListNode? = list1
        var l2: ListNode? = list2
        while l1 != nil && l2 != nil {
            if l1!.val <= l2!.val {
                prev?.next = l1
                l1 = l1?.next
            } else {
                prev?.next = l2
                l2 = l2?.next
            }

            prev = prev?.next
        }

        prev?.next = (l1 == nil) ? l2 : l1
        return prehead?.next
    }
}
