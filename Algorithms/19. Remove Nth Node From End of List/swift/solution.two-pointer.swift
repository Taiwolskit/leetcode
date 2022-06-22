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
    func removeNthFromEnd(_ head: ListNode?, _ n: Int) -> ListNode? {
        guard let head = head else { return nil }

        let dummy = ListNode(0, head)
        var length: Int = 0
        var first: ListNode? = head

        while first != nil {
            length += 1
            first = first?.next
        }

        first = dummy
        for _ in 0..<(length - n) {
            first = first?.next
        }

        first!.next = first?.next?.next
        return dummy.next
    }
}
