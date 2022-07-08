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
    func addTwoNumbers(_ l1: ListNode?, _ l2: ListNode?) -> ListNode? {
        let dummyHead = ListNode(0)
        var p = l1
        var q = l2
        var curr = dummyHead
        var carry = 0
        var r = 0
        var x = 0
        var y = 0
        var sum = 0

        while p != nil || q != nil {
            x = p?.val ?? 0
            y = q?.val ?? 0
            sum = x + y + carry

            (carry, r) = sum.quotientAndRemainder(dividingBy: 10)
            curr.next = ListNode(r)
            curr = curr.next!
            p = p?.next
            q = q?.next
        }

        if carry > 0 {
            curr.next = ListNode(1)
        }

        return dummyHead.next
    }
}
