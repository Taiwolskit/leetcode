/**
 * Example: var li = ListNode(5) var v = li.`val` Definition for singly-linked list. class
 * ListNode(var `val`: Int) {
 * ```
 *     var next: ListNode? = null
 * ```
 * }
 */
class Solution {
    fun splitListToParts(head: ListNode?, k: Int): Array<ListNode?> {
        val listSize = size(head)

        val splitSize = listSize / k
        val plusOne = listSize % k

        var itr = head
        val result = Array<ListNode?>(k) { null }

        for (i in 1..k) {
            result[i - 1] = itr
            itr = run(itr, splitSize - 1 + if (plusOne >= i) 1 else 0)
            val next = itr?.next
            itr?.next = null
            itr = next
        }

        return result
    }

    private fun size(head: ListNode?): Int {
        var count = 0
        var itr = head

        while (itr != null) {
            itr = itr.next
            count++
        }

        return count
    }

    private fun run(head: ListNode?, num: Int): ListNode? {
        var itr = head
        repeat(num) { itr = itr?.next }
        return itr
    }
}
