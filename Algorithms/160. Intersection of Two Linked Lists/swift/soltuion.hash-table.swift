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

extension ListNode: Equatable, Hashable {
    public static func == (lhs: ListNode, rhs: ListNode) -> Bool {
        return lhs === rhs
    }

    public func hash(into hasher: inout Hasher) {
        hasher.combine(val + (next?.val ?? 0))
    }
}


class Solution {
    func getIntersectionNode(_ headA: ListNode?, _ headB: ListNode?) -> ListNode? {
        var nodesInB = Set<ListNode>()
        var temp = headB

        while temp != nil {
            nodesInB.insert(temp!)
            temp = temp?.next
        }

        temp = headA
        while temp != nil {
            if nodesInB.contains(temp!) {
                return temp
            }
            temp = temp?.next
        }

        return nil
    }
}