/**
 * Example:
 * var li = ListNode(5)
 * var v = li.`val`
 * Definition for singly-linked list.
 * class ListNode(var `val`: Int) {
 *     var next: ListNode? = null
 * }
 */
import java.util.*
class Solution {
    fun mergeKLists(lists: Array<ListNode?>): ListNode? {
        if (lists.isEmpty()) {
            return null
        }
        val queue = PriorityQueue<ListNode> { l1, l2 -> l1.`val` - l2.`val` }
        lists.forEach {
            if (it != null) {
                queue.add(it) 
            }
        }

        var result = ListNode(0)
        val head = result
        while (queue.isNotEmpty()) {
            val num = queue.remove()
            if (num.next != null) {
                queue.add(num.next)
            }
            result.next = num
            result = result.next
        }
        return head.next
    }
}