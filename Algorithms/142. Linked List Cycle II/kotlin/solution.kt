/**
 * Example: var li = ListNode(5) var v = li.`val` Definition for singly-linked list. class
 * ListNode(var `val`: Int) {
 * ```
 *     var next: ListNode? = null
 * ```
 * }
 */
class Solution {
    private fun getIntersect(head: ListNode): ListNode? {
        var tortoise: ListNode? = head
        var hare: ListNode? = head

        // A fast pointer will either loop around a cycle and meet the slow
        // pointer or reach the `null` at the end of a non-cyclic list.
        while (hare != null && hare.next != null) {
            tortoise = tortoise?.next
            hare = hare?.next?.next
            if (tortoise === hare) {
                return tortoise
            }
        }
        return null
    }

    fun detectCycle(head: ListNode?): ListNode? {
        if (head == null) {
            return null
        }

        // If there is a cycle, the fast/slow pointers will intersect at some
        // node. Otherwise, there is no cycle, so we cannot find an entrance to
        // a cycle.
        val intersect: ListNode = getIntersect(head) ?: return null

        // To find the entrance to the cycle, we have two pointers traverse at
        // the same speed -- one from the front of the list, and the other from
        // the point of intersection.
        var ptr1: ListNode = head
        var ptr2: ListNode = intersect
        while (ptr1 !== ptr2) {
            ptr1 = ptr1.next
            ptr2 = ptr2.next
        }
        return ptr1
    }
}
