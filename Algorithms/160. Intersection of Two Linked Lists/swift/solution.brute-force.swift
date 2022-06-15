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
    func getIntersectionNode(_ headA: ListNode?, _ headB: ListNode?) -> ListNode? {
        var a = headA
        while a != nil {
            var pB = headB
            while pB != nil{
                if a === pB {
                    return a
                }
                pB = pB?.next
            }
            a = a?.next
        }
        return nil
    }
}