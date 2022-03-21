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
    fun addTwoNumbers(l1: ListNode, l2: ListNode): ListNode {
        val result = ListNode(0)
        var current = result
        var l1Current: ListNode? = l1
        var l2Current: ListNode? = l2
        var carry = 0

        while (l1Current != null || l2Current != null || carry > 0) {
            val sum = (l1Current?.`val` ?: 0) + (l2Current?.`val` ?: 0) + carry
            carry = sum / 10
            val node = ListNode(sum % 10)
            current?.next = node
            current = node
            l1Current = l1Current?.next
            l2Current = l2Current?.next
        }

        return result.next
    }
}
