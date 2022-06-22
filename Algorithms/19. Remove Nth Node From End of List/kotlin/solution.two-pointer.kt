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
    fun removeNthFromEnd(head: ListNode?, n: Int): ListNode? {
        val dummy: ListNode = ListNode(0).apply { next = head }
        var first: ListNode? = head
        var length: Int = 0

        while (first!!.next != null) {
            length ++
            first = first!!.next
        }

        first = dummy
        for (i in (length - n) downTo 0) {
            first = first!!.next
        }

        first!!.next = first?.next?.next
        return dummy.next
    }
}