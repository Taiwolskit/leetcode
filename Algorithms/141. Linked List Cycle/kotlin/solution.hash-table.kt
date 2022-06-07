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
    fun hasCycle(head: ListNode?): Boolean {
        var nodesSeen = mutableSetOf<ListNode>()
        var node = head
        while (node != null) {
            if (nodesSeen.contains(node)) {
                return true
            }
            nodesSeen.add(node)
            node = node.next
        }
        return false
    }
}