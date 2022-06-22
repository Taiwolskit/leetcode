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
    fun reverseList(head: ListNode?): ListNode? {
        if (head == null || head?.next == null) return head

        var p: ListNode? = reverseList(head?.next)
        head?.next?.next = head
        head?.next = null
        return p
    }
}
