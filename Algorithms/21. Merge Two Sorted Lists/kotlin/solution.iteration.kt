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
    fun mergeTwoLists(list1: ListNode?, list2: ListNode?): ListNode? {
        var prehead: ListNode? = ListNode(0)

        var prev: ListNode? = prehead
        var l1: ListNode? = list1
        var l2: ListNode? = list2
        while (l1 != null && l2 != null) {
            if (l1.`val` <= l2.`val`) {
                prev?.next = l1
                l1 = l1.next
            } else {
                prev?.next = l2
                l2 = l2.next
            }
            prev = prev?.next
        }
        prev?.next = if (l1 != null) l1 else l2
        return prehead?.next
    }
}