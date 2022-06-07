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
    func hasCycle(_ head: ListNode?) -> Bool {
        var nodesSeen = [ListNode]()
        var node = head
        while node != nil {
            if nodesSeen.contains(where: {$0 === node!}) {
                return true
            }
            nodesSeen.append(node!)
            node = node?.next
        }
        return false
    }
}