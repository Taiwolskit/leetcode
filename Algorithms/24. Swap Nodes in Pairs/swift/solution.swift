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
    func swapPairs(_ head: ListNode?) -> ListNode? {
        var (cur, next) = (head, head?.next)
        var answer = next ?? cur

        while cur != nil, next != nil {
            var _cur = next?.next
            var _next = _cur?.next

            next?.next = cur
            cur?.next = _next ?? _cur

            (cur, next) = (_cur, _next)
        }

        return answer
    }
}
