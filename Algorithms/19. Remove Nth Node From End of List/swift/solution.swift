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
    func removeNthFromEnd(_ head: ListNode?, _ n: Int) -> ListNode? {
        guard let head = head else { return nil }

        let dummy = ListNode(0)
        dummy.next = head
        var first: ListNode? = dummy
        var second: ListNode? = dummy

        for _ in 0...n {
            first = first?.next
        }

        while first != nil {
            first = first?.next
            second = second?.next
        }

        second!.next = second?.next?.next
        return dummy.next
    }
}