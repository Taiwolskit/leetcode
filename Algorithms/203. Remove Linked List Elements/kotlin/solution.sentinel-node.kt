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
    fun removeElements(head: ListNode?, `val`: Int): ListNode? {
        var sentinel = ListNode(0)
        sentinel.next = head
        var prev = sentinel
        var curr = head
        while (curr != null) {
            if (curr.`val` == `val`) {
                prev.next = curr.next
            } else {
                prev = curr
            }
            curr = curr.next
        }
        return sentinel.next
    }
}