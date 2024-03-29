/**
 * Example:
 * var li = ListNode(5)
 * var v = li.`val`
 * Definition for singly-linked list.
 * class ListNode(var `val`: Int) {
 *     var next: ListNode? = null
 * }
 */

class Solution {
    fun getIntersectionNode(headA:ListNode?, headB:ListNode?):ListNode? {
        var nodesInB = HashSet<ListNode>()
        var node: ListNode? = headB
        while (node != null) {
            nodesInB.add(node)
            node = node.next
        }

        node = headA
        while (node != null) {
            if (nodesInB.contains(node)) {
                return node
            }
            node = node.next
        }
        return null
    }
}