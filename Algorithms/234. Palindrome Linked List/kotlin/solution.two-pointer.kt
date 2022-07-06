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
    fun isPalindrome(head: ListNode?): Boolean {
        var vals: MutableList<Int> = mutableListOf()
        var currentNode: ListNode? = head
        while (currentNode != null) {
            vals.add(currentNode.`val`)
            currentNode = currentNode.next
        }

        var left: Int = 0
        var right: Int = vals.size - 1
        while (left < right) {
            if (vals[left] != vals[right]) {
                return false
            }
            left++
            right--
        }
        return true
    }
}