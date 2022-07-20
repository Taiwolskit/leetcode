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
    func rotateRight(_ head: ListNode?, _ k: Int) -> ListNode? {
        if head == nil || head?.next == nil {
            return head
        }

        var oldTail: ListNode? = head
        var n: Int = 1
        while oldTail?.next != nil {
            oldTail = oldTail?.next
            n += 1
        }
        oldTail?.next = head

        var newTail: ListNode? = head
        for _ in 0..<(n - k % n - 1) {
            newTail = newTail?.next
        }
        let newHead: ListNode? = newTail?.next
        newTail?.next = nil
        return newHead
    }
}