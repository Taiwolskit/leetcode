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
    func detectCycle(_ head: ListNode?) -> ListNode? {
        var visited = [ListNode]()

        var node = head
        while node != nil {
            if visited.contains(where: {$0 === node!}) {
                return node
            }
            visited.append(node!)
            node = node?.next
        }
        return nil
    }
}