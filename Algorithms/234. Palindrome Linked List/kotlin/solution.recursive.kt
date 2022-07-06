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
    var frontPointer: ListNode? = null

    fun isPalindrome(head: ListNode?): Boolean {
        frontPointer = head

        fun recursivelyCheck(currentNode: ListNode? = head): Boolean {
            if (currentNode == null) {
                return true
            }
            if (!recursivelyCheck(currentNode.next)) {
                return false
            }
            if (currentNode.`val` != frontPointer?.`val`) {
                return false
            }
            frontPointer = frontPointer?.next
            return true
        }

        return recursivelyCheck()
    }
}