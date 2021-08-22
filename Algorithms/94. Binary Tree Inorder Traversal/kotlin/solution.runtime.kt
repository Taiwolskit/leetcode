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
    fun inorderTraversal(root: TreeNode?): List<Int> =
            ArrayList<Int>(100).apply { addAllInorderTraversalRecursive(root) }

    private fun MutableList<Int>.addAllInorderTraversalRecursive(root: TreeNode?) {
        if (root == null) return

        root.left?.let { addAllInorderTraversalRecursive(it) }
        add(root.`val`)
        root.right?.let { addAllInorderTraversalRecursive(it) }
    }
}
