/**
 * Example:
 * var ti = TreeNode(5)
 * var v = ti.`val`
 * Definition for a binary tree node.
 * class TreeNode(var `val`: Int) {
 *     var left: TreeNode? = null
 *     var right: TreeNode? = null
 * }
 */
class Solution {
    fun inorderTraversal(root: TreeNode?): List<Int> {

        val result = mutableListOf<Int>()
        var current = root
        var orderStack = Stack<TreeNode>()

        while (current != null || orderStack.isNotEmpty()) {

            while (current != null) {
                orderStack.push(current)
                current = current.left
            }
            current = orderStack.pop()
            result.add(current!!.`val`)
            current = current.right
        }

        return result
    }
}
