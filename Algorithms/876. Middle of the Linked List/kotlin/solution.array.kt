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
    fun middleNode(head: ListNode?): ListNode? {
        var curr = head
        var arr: ArrayList<ListNode> = ArrayList()
        arr.add(curr!!)
        while (curr != null) {
            arr.add(curr)
            curr = curr.next
        }
        return if (arr.size % 2 == 0) {
            arr[arr.size / 2]
        } else {
            arr[arr.size / 2 + 1]
        }
    }
}
