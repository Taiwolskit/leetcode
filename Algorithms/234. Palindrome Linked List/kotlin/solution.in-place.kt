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
        if (head == null) return true

        var firstHalfEnd: ListNode? = endOfFirstHalf(head)
        var secondHalfStart: ListNode? = reverse(firstHalfEnd?.next)

        var result: Boolean = true
        var firstPosition: ListNode? = head
        var secondPosition: ListNode? = secondHalfStart
        while (result && secondPosition != null) {
            if (firstPosition?.`val` != secondPosition?.`val`) {
                result = false
            }
            firstPosition = firstPosition?.next
            secondPosition = secondPosition?.next
        }

        firstHalfEnd?.next = reverse(secondHalfStart)
        return result
    }

    fun endOfFirstHalf(head: ListNode?): ListNode? {
        var fast: ListNode? = head
        var slow: ListNode? = head
        while (fast?.next != null && fast?.next?.next != null) {
            fast = fast.next?.next
            slow = slow?.next
        }
        return slow
    }

    fun reverse(head: ListNode?): ListNode? {
        var previous: ListNode? = null
        var current: ListNode? = head
        while (current != null) {
            val nextNode = current.next
            current.next = previous
            previous = current
            current = nextNode
        }
        return previous
    }
}
