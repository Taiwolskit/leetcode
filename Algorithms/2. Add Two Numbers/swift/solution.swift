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
    func addTwoNumbers(_ l1: ListNode?, _ l2: ListNode?) -> ListNode? {
        let dummyHead = ListNode( 0 )
        var p = l1, q = l2, curr = dummyHead, carry = 0, r = 0, x = 0, y = 0, sum = 0

        while p != nil || q != nil {
            x = p?.val ?? 0
            y = q?.val ?? 0
            sum = x + y + carry

            (carry,r) = sum.quotientAndRemainder(dividingBy: 10)
            curr.next = ListNode( r )
            curr = curr.next!
            p = p?.next
            q = q?.next
        }

        if ( carry > 0 ) {
            curr.next = ListNode(1)
        }

        return dummyHead.next
    }
}
