/**
 * Definition for a Node.
 * public class Node {
 *     public var val: Int
 *     public var next: Node?
 *     public init(_ val: Int) {
 *         self.val = val
 *         self.next = nil
 *     }
 * }
 */

class Solution {
    func insert(_ head: Node?, _ insertVal: Int) -> Node? {
        if head == nil {
            let newNode: Node? = Node(insertVal)
            newNode.next = newNode
            return newNode
        }

        var prev: Node? = head
        var curr: Node? = head?.next
        while curr != head {
            if prev!.val <= insertVal && insertVal <= curr!.val {
                break
            }
            if prev!.val > curr!.val {
                if insertVal >= prev!.val || insertVal <= curr!.val {
                    break
                }
            }
            prev = curr
            curr = curr?.next
        }

        var newNode: Node? = Node(insertVal)
        newNode.next = curr
        prev?.next = newNode
        return head
    }
}