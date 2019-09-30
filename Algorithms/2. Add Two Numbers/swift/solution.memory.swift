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
        var list1 = l1
        var list2 = l2
        var root:ListNode? = nil
        var currentNode:ListNode? = nil
        var (q,r):(Int,Int)
        var carry = 0

        while !(list1 == nil && list2 == nil && carry == 0 ){
            (q,r) = ((list1?.val ?? 0 ) + (list2?.val ?? 0) + carry).quotientAndRemainder(dividingBy: 10)
            carry = q
            let node = ListNode(r)
            if root == nil {
                root = node
            }

            list1 = list1?.next
            list2 = list2?.next
            currentNode?.next = node
            currentNode = node
        }

        return root
    }
}
