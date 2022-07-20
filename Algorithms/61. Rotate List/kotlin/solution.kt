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
    fun rotateRight(head: ListNode?, k: Int): ListNode? {
        if (head == null || head.next == null) return head

        var oldTail: ListNode? = head
        var count: Int = 1
        while (oldTail?.next != null) {
            oldTail = oldTail.next
            count++
        }
        oldTail?.next = head

        var newTail: ListNode? = head
        for (i in 0 until count - k % count - 1) {
            newTail = newTail?.next
        }
        val newHead: ListNode? = newTail?.next
        newTail?.next = null
        return newHead
    }
}