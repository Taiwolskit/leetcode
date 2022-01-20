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
    private func getIntersect(_ head: ListNode?) -> ListNode? {
        var hare = head, tortoise = head
        while hare != nil, hare?.next != nil {
            tortoise = tortoise?.next
            hare = hare?.next?.next
            if tortoise === hare {
                return tortoise
            }
        }
        return nil
    }

    func detectCycle(_ head: ListNode?) -> ListNode? {
        if head == nil {
            return nil
        }

        let intersect = getIntersect(head)
        if intersect == nil {
            return nil
        }

        var ptr1 = head
        var ptr2 = intersect
        while ptr1 !== ptr2 {
            ptr1 = ptr1?.next
            ptr2 = ptr2?.next
        }
        return ptr1
    }
}
