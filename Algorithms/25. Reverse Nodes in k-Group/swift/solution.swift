/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public var val: Int
 *     public var next: ListNode?
 *     public init(_ val: Int) {
 *         self.val = val
 *         self.next = nil
 *     }
 * }
 */
class Solution {
    func reverseKGroup(_ head: ListNode?, _ k: Int) -> ListNode? {
        if (head == nil) {
            return nil
        }
        if (k < 2) {
            return head
        }
        var dummy = ListNode(0)
        guard let head = head else {
            return nil
        }
        dummy.next = head
        var current = dummy

        while(current.next != nil) {
            var start = current.next
            var end = current.next
            var count = 1
            while (count < k && end != nil) {
                end = end!.next
                count += 1
            }

            if (end == nil) {
                break
            }
            var next = end!.next
            end!.next = nil
            
            var tCurr = start
            var prev:ListNode? = nil
            while (tCurr != nil) {
                let tNext = tCurr!.next
                tCurr!.next = prev
                prev = tCurr!
                tCurr = tNext
            }

            current.next = end
            start!.next = next
            current = start!
        }

        return dummy.next
    }
}