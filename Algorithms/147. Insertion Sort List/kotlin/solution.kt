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
    fun insertionSortList(head: ListNode?): ListNode? {
        val dummyHead = ListNode(0)
        var curr = head

        while (curr != null) {
            var prev = dummyHead

            while (prev.next != null && prev.next!!.`val` < curr.`val`) {
                prev = prev.next!!
            }

            val nextNode = curr.next
            curr.next = prev.next
            prev.next = curr
            curr = nextNode
        }

        return dummyHead.next
    }
}
