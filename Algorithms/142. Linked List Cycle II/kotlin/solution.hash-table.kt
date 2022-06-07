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
    fun detectCycle(head: ListNode?): ListNode? {
        val visited = mutableSetOf<ListNode>()

        var node = head
        while (node != null) {
            if (visited.contains(node)) {
                return node
            }
            visited.add(node)
            node = node.next
        }
        return null
    }
}