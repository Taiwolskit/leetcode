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
    fun swapPairs(head: ListNode?): ListNode? {
        if (head == null || head.next == null) {
            return head
        }

        val dummy = ListNode(0)

        var current: ListNode? = head
        var prevNode: ListNode? = dummy

        while (current != null && current?.next != null) {
            val secondNext = current?.next?.next
            val second = current?.next

            prevNode?.next = second
            second?.next = current
            current?.next = secondNext

            prevNode = prevNode?.next?.next
            current = secondNext
        }


        return dummy.next
    }
}
