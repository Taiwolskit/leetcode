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
    fun reverseKGroup(head: ListNode?, k: Int): ListNode? {
        if (head == null) {
            return null
        }
        var reversed: ListNode? = null
        var current: ListNode? = head
        var tmp: ListNode?
        var count = 0

        while (count < k && current != null) {
            tmp = current?.next
            current.next = reversed
            reversed = current
            current = tmp
            count++
        }

        if (current == null && count < k) {
            return reverse(reversed)
        }

        head.next = reverseKGroup(current, k)
        return reversed
    }

    fun reverse(head: ListNode?): ListNode? {
        var reversed: ListNode? = null
        var current = head
        var tmp: ListNode?
        while (current != null) {
            tmp = current?.next
            current.next = reversed
            reversed = current
            current = tmp
        }
        return reversed
    }
}