/**
 * Example:
 * var li = ListNode(5)
 * var v = li.`val`
 * Definition for singly-linked list.
 * class ListNode(var `val`: Int) {
 *     var next: ListNode? = null
 * }
 */
import java.math.BigInteger

class Solution {
    fun addTwoNumbers(l1: ListNode?, l2: ListNode?): ListNode? {
        val resultNum = getLong(l1).add(getLong(l2))
        return genListNode(resultNum)
    }

    fun getLong(li: ListNode?): BigInteger {
        var intStr: String = ""
        var current = li
        while (current != null) {
            intStr = "${current?.`val`}$intStr"
            current = current?.next
        }
        return BigInteger(intStr)
    }

    fun genListNode(num: BigInteger): ListNode? {
        var currentListNode: ListNode? = null
        var numString = num.toString()
        for (character in numString) {
            val numInInt = Character.getNumericValue(character)
            val newNode = ListNode(numInInt)
            newNode.next = currentListNode
            currentListNode = newNode
        }
        return currentListNode
    }
}
