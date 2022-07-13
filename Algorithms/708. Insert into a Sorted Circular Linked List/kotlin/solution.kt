/**
 * Definition for a Node.
 * class Node(var `val`: Int) {
 *     var next: Node? = null
 * }
 */

class Solution {
    fun insert(head: Node?, insertVal: Int): Node? {
        if (head == null) {
            val newNode: Node? = Node(insertVal)
            newNode?.next = newNode
            return newNode
        }

        var prev: Node? = head
        var curr: Node? = head?.next
        while (curr != head) {
            if (prev!!.`val` <= insertVal && insertVal <= curr!!.`val`) {
                break
            }
            if (prev!!.`val` > curr!!.`val`) {
                if (insertVal >= prev!!.`val` || insertVal <= curr!!.`val`) {
                    break
                }
            }

            prev = curr
            curr = curr?.next
        }

        val newNode: Node? = Node(insertVal)
        newNode?.next = curr
        prev?.next = newNode
        return head
    }
}