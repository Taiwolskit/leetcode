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
    fun getIntersectionNode(headA:ListNode?, headB:ListNode?):ListNode? {
        var pA: ListNode? = headA
        while (pA != null) {
            var pB: ListNode? = headB
            while (pB != null) {
                if (pB == pA) {
                    return pA
                }
                pB = pB.next
            }
            pA = pA.next
        }
        return null
    }
}