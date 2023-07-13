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
    func insertionSortList(_ head: ListNode?) -> ListNode? {
        let dummyHead = ListNode(0)
        var curr = head

        while curr != nil {
            var prev = dummyHead

            while prev.next != nil && prev.next!.val < curr!.val {
                prev = prev.next!
            }

            let nextNode = curr!.next
            curr!.next = prev.next
            prev.next = curr
            curr = nextNode
        }

        return dummyHead.next
    }
}
